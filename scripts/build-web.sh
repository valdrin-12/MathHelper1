#!/bin/bash
# Build web app and inject icon font CSS into index.html
set -e

echo "Building Expo web..."
npx expo export --platform web

echo "Injecting @font-face CSS for Ionicons..."
# Find the Ionicons TTF hash in dist
IONICONS_FILE=$(find dist/assets -name "Ionicons.*.ttf" | head -1)
IONICONS_PATH="/assets/$(echo "$IONICONS_FILE" | sed 's|dist/assets/||')"

# Inject @font-face CSS into index.html
sed -i.bak "s|</style>|</style>\n    <style id=\"expo-fonts\">\n      @font-face {\n        font-family: \"ionicons\";\n        src: url(\"$IONICONS_PATH\") format(\"truetype\");\n        font-display: swap;\n      }\n    </style>|" dist/index.html
rm -f dist/index.html.bak

echo "Copying to backend/public..."
rm -rf backend/public/*
cp -r dist/* backend/public/

echo "Done! Web build ready in backend/public/"
