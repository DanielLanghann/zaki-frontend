#!/bin/sh

# Check if the folder name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <folder_name>"
  exit 1
fi

FOLDER_NAME=$1

BASE_DIR="./src/screens/$FOLDER_NAME"

mkdir -p "$BASE_DIR"

SUBDIRS=("actions" "callbacks" "hooks" "components" "constants" "handler" "reducer" "utils")

for SUBDIR in "${SUBDIRS[@]}"; do
  mkdir -p "$BASE_DIR/$SUBDIR"
done

echo "Directory structure created successfully in $BASE_DIR"
