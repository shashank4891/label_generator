#!/usr/bin/env bash

# Install Google Chrome
apt-get update && apt-get install -y wget
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
apt-get install -y ./google-chrome-stable_current_amd64.deb
