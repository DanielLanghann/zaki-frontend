#!/bin/bash

PORT=3000

# Find the process IDs (PIDs) using the port number
PIDS=$(lsof -t -i :$PORT)

# Check if any PIDs were found
if [ -z "$PIDS" ]; then
  echo "No processes found running on port $PORT."
else
  echo "Killing processes running on port $PORT..."
  # Kill each process
  for PID in $PIDS; do
    kill -9 $PID
    echo "Killed process $PID"
  done
fi
