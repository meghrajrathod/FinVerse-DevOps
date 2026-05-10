#!/bin/bash

echo "🚀 Starting FinVerse Deployment"

cd ~/FinVerse-DevOps || exit

echo "📥 Pulling Latest Code"
git pull

echo "🛑 Stopping Containers"
docker compose down

echo "🧹 Cleaning Old Docker Images"
docker image prune -f

echo "🏗️ Building Containers"
docker compose build

echo "🚀 Starting Containers"
docker compose up -d

echo "📦 Running Containers"
docker ps

echo "✅ Deployment Completed Successfully"