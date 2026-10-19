#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/.."

echo "Checking Prisma database..."

if npx prisma dev ls 2>/dev/null | grep -Eq '^[[:space:]]*my-personal[[:space:]]+running([[:space:]]|$)'; then
  echo "Prisma database is already running."
else
  echo "Starting Prisma database..."
  if ! npx prisma dev start my-personal >/tmp/my-personal-prisma-start.log 2>&1; then
    echo "Could not start the Prisma database."
    echo "Check the Prisma server status with: npx prisma dev ls"
    exit 1
  fi
  echo "Prisma start command completed."
fi

echo "Starting Next.js..."
exec ./node_modules/.bin/next dev
