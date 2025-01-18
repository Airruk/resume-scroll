#!/bin/bash

# Kill any processes running on ports 3000-3002
echo "Cleaning up ports 3000-3002..."
lsof -ti:3000-3002 | xargs kill -9 2>/dev/null || true

# Clean Next.js cache
echo "Cleaning Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

# Install dependencies (in case they're outdated)
echo "Installing dependencies..."
npm install

# Start the development server
echo "Starting development server..."
PORT=3000 npm run dev
