#!/bin/bash

echo "🔍 Running FinVerse Health Checks"

echo ""

echo "📦 Running Containers"
docker ps

echo ""

echo "🌐 Checking Backend API"

curl -f http://localhost:8080/swagger/index.html

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Backend API Healthy"
else
    echo ""
    echo "❌ Backend API Failed"
fi

echo ""

echo "🗄️ Checking PostgreSQL Container"

docker ps | grep postgres

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ PostgreSQL Healthy"
else
    echo ""
    echo "❌ PostgreSQL Failed"
fi

echo ""

echo "🚀 Health Check Completed"