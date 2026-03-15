#!/bin/bash
# Build web app, inject icon font CSS, and deploy to backend/public
set -e

echo "Building Expo web..."
npx expo export --platform web

echo "Copying to backend/public..."
rm -rf backend/public/*
cp -r dist/* backend/public/

echo "Setting up icon fonts..."
# Copy Ionicons font to a clean path (avoids @ symbol path issues with Express)
mkdir -p backend/public/fonts
IONICONS_FILE=$(find dist/assets -name "Ionicons.*.ttf" | head -1)
cp "$IONICONS_FILE" backend/public/fonts/ionicons.ttf

# Inject @font-face CSS into index.html (first </style> occurrence)
sed -i.bak 's|</style>|</style>\
    <style id="expo-fonts">\
      @font-face {\
        font-family: "ionicons";\
        src: url("/fonts/ionicons.ttf") format("truetype");\
        font-display: swap;\
      }\
    </style>|' backend/public/index.html
rm -f backend/public/index.html.bak

# Copy payment page
cp paysera-demo.html backend/public/payment.html

echo "Done! Web build ready in backend/public/"
