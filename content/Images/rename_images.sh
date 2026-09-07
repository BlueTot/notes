#!/bin/bash

# Rename all image files in the current directory by replacing spaces with underscores
for file in *\ *.{png,jpg,jpeg,gif}; do
  # Skip if no match (to avoid errors if no such files)
  [ -e "$file" ] || continue
  new_name=$(echo "$file" | tr ' ' '_')
  mv "$file" "$new_name"
done

