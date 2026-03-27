#!/usr/bin/env bash
# ── BiRefNet server setup & start script for Ubuntu VPS ──────────────────────
# Run once: bash setup.sh
# Then to start: bash start.sh

set -e
VENV_DIR="$HOME/birefnet-env"

echo "==> Installing system deps..."
apt-get update -qq && apt-get install -y python3 python3-pip python3-venv

echo "==> Creating Python venv at $VENV_DIR..."
python3 -m venv "$VENV_DIR"
source "$VENV_DIR/bin/activate"

echo "==> Installing pip packages (CPU torch, ~1.5GB download)..."
pip install --upgrade pip

# CPU-only torch index for Linux VPS (avoids downloading CUDA builds)
pip install torch==2.2.2+cpu torchvision==0.17.2+cpu \
    --index-url https://download.pytorch.org/whl/cpu

pip install fastapi uvicorn[standard] python-multipart \
    transformers Pillow huggingface_hub

echo "==> Setup complete!"
echo ""
echo "To start the server:"
echo "  bash start.sh"
