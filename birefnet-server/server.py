"""
BiRefNet background removal server — FastAPI
Loads ZhengPeng7/BiRefNet once at startup; serves POST /remove-background.
CPU-optimised (no GPU required). Model download ~350MB on first run.
"""

import io
import logging
import os
import sys

import torch
import torchvision.transforms as T
import uvicorn
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.responses import Response
from PIL import Image
from transformers import AutoModelForImageSegmentation

# ── Logging ──────────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [BiRefNet] %(levelname)s %(message)s",
    stream=sys.stdout,
)
log = logging.getLogger(__name__)

# ── Config ───────────────────────────────────────────────────────────────────
PORT = int(os.getenv("PORT", "8089"))
MODEL_ID = os.getenv("BIREFNET_MODEL", "ZhengPeng7/BiRefNet")
RESOLUTION = int(os.getenv("BIREFNET_RESOLUTION", "1024"))

# Use all available CPU cores for PyTorch
torch.set_num_threads(os.cpu_count() or 4)

# ── Model loading (singleton at startup) ─────────────────────────────────────
log.info(f"Loading {MODEL_ID} (first run downloads ~350 MB)…")
birefnet = AutoModelForImageSegmentation.from_pretrained(
    MODEL_ID,
    trust_remote_code=True,
    dtype=torch.float32,         # CPU does not support float16 ops
)
birefnet = birefnet.float()      # ensure all weights are fp32
birefnet.eval()
log.info("Model loaded and ready.")

# ── Image transform (must match BiRefNet training pre-processing) ─────────────
transform = T.Compose(
    [
        T.Resize((RESOLUTION, RESOLUTION)),
        T.ToTensor(),
        T.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
    ]
)

# ── FastAPI app ───────────────────────────────────────────────────────────────
app = FastAPI(title="BiRefNet API", version="1.0.0")


@app.get("/health")
def health():
    return {"status": "ok", "model": MODEL_ID, "resolution": RESOLUTION}


@app.post("/remove-background")
async def remove_background(file: UploadFile = File(...)):
    """
    Accept a multipart image upload (`file` field),
    return a transparent PNG with the background removed.
    """
    # ── Read & validate ───────────────────────────────────────────────────────
    data = await file.read()
    try:
        image = Image.open(io.BytesIO(data)).convert("RGB")
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"Cannot read image: {exc}")

    orig_w, orig_h = image.size
    log.info(f"Processing {orig_w}×{orig_h} image…")

    # ── Inference ─────────────────────────────────────────────────────────────
    try:
        tensor = transform(image).unsqueeze(0).float()   # ensure fp32 on CPU
        with torch.inference_mode():
            preds = birefnet(tensor)[-1].sigmoid()      # [1, 1, H, W]

        # Squeeze to [H, W] probability mask, resize to original
        mask_tensor = preds[0].squeeze()                # [H, W]
        mask = T.ToPILImage()(mask_tensor).resize(
            (orig_w, orig_h), Image.LANCZOS
        )
    except Exception as exc:
        log.exception("Inference failed")
        raise HTTPException(status_code=500, detail=f"Inference error: {exc}")

    # ── Compose transparent PNG ───────────────────────────────────────────────
    result = image.copy().convert("RGBA")
    result.putalpha(mask)

    out = io.BytesIO()
    result.save(out, format="PNG", optimize=True)
    out.seek(0)

    log.info("Done — returning transparent PNG.")
    return Response(content=out.read(), media_type="image/png")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=PORT, log_level="info")
