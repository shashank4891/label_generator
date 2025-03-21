#!/usr/bin/env bash

echo "🟢 Installing required dependencies for Puppeteer..."
apt-get update && apt-get install -y \
  libnss3 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libcups2 \
  libxkbcommon-x11-0 \
  libgbm1 \
  libasound2

echo "✅ Dependencies installed successfully."

echo "🟢 Installing Google Chrome..."
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
apt-get install -y ./google-chrome-stable_current_amd64.deb

echo "✅ Google Chrome installed successfully."