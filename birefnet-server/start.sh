#!/usr/bin/env bash
# Start the BiRefNet server (or restart if already running)
set -e
VENV_DIR="$HOME/birefnet-env"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

source "$VENV_DIR/bin/activate"

echo "==> Starting BiRefNet server on port 8089..."
exec python "$SCRIPT_DIR/server.py"
