#!/bin/bash
set -e

echo "📦 Installing Maestro CLI..."

# Check if running on supported OS
if [[ "$OSTYPE" == "linux-gnu"* || "$OSTYPE" == "darwin"* ]]; then
  if ! command -v maestro &> /dev/null; then
    curl -Ls "https://get.maestro.mobile.dev" | bash
    echo "✅ Maestro installed successfully."
  else
    echo "✅ Maestro is already installed."
  fi
else
  echo "❌ Maestro is not supported on this operating system."
  echo "Please use macOS or Linux. Windows is not supported natively."
  exit 1
fi
