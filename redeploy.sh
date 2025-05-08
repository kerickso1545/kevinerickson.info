#!/bin/bash

set -e

zip_dir="$HOME/Downloads"
repo_dir="$HOME/Projects/kevinerickson.info"
target_dir="project"
extract_dir="../temp_extract"

# Ensure we're starting from the repo root
cd "$repo_dir"

# List available Bolt.new zip exports
mapfile -t zip_files < <(ls -t "$zip_dir"/project-bolt*.zip 2>/dev/null)

if [ ${#zip_files[@]} -eq 0 ]; then
  echo "❌ No project-bolt*.zip files found in $zip_dir"
  exit 1
fi

echo "Select a Bolt.new zip file to deploy (sorted by most recent):"
for i in "${!zip_files[@]}"; do
  echo "  [$i] ${zip_files[$i]}"
done

read -p "Enter the number of the file to extract: " choice
if ! [[ "$choice" =~ ^[0-9]+$ ]] || [ "$choice" -ge "${#zip_files[@]}" ]; then
  echo "❌ Invalid selection"
  exit 1
fi

selected="${zip_files[$choice]}"
echo "📦 You selected: $selected"

# Clean up previous temp extract
rm -rf "$extract_dir"
unzip -q "$selected" -d "$extract_dir"

echo "🚚 Syncing source into project directory..."

# Remove outdated source folders
rm -rf "$target_dir/src" "$target_dir/public"

# Sync everything except excluded files
rsync -av --exclude='dist' --exclude='node_modules' "$extract_dir/project/" "$target_dir/"

# Clean up extraction temp folder
rm -rf "$extract_dir"

echo "✅ Project source updated in $target_dir"

# Prompt for commit message
read -p "Enter a Git commit message for this deployment: " commit_message

echo "🔄 Committing updated source to GitHub..."
cd "$target_dir"
git add .
git commit -m "$commit_message"
git push origin main

echo "🔨 Building and deploying site to GitHub Pages..."
rm -rf dist
npm install
npm run build
npm run deploy

echo "🌍 Site should be live shortly at https://kevinerickson.info"
