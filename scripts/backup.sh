#!/bin/bash

echo "🗄️ Starting PostgreSQL Backup"

BACKUP_DIR=~/FinVerse-DevOps/backups

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

BACKUP_FILE=$BACKUP_DIR/finverse_$TIMESTAMP.sql

mkdir -p $BACKUP_DIR

docker exec finverse-postgres pg_dump \
-U postgres \
finverse_db > $BACKUP_FILE

echo "✅ Backup Created: $BACKUP_FILE"

echo ""

echo "📂 Available Backups"

ls -lh $BACKUP_DIR