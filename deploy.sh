#!/bin/bash
set -e

# ================= Configuration =================
SERVER_IP="14.103.236.231"
SSH_USER="root"
SSH_KEY="/Users/pxj/Downloads/pxj.pem"
REMOTE_DIR="/root/tokenlabs/web"
APP_NAME="web"
PORT=3001
# =================================================

echo "🚀 Starting automated deployment to $SERVER_IP..."

# 1. Build the project
echo "📦 Building Next.js project..."
npm run build

# 2. Prepare the standalone package
echo "🔧 Assembling deployment package..."

# Find the standalone project root (dynamically matches local path structure)
STANDALONE_ROOT=$(find .next/standalone -name server.js | head -n 1 | xargs dirname)

if [ -z "$STANDALONE_ROOT" ]; then
  echo "❌ Error: Could not find server.js in .next/standalone"
  exit 1
fi

echo "   Project root found at: $STANDALONE_ROOT"

# Ensure destination directories exist in the standalone build
mkdir -p "$STANDALONE_ROOT/public"
mkdir -p "$STANDALONE_ROOT/.next/static"

# Copy necessary static assets (Next.js standalone doesn't include these by default)
echo "   Copying public and static files..."
cp -R public/* "$STANDALONE_ROOT/public/"
cp -R .next/static/* "$STANDALONE_ROOT/.next/static/"

# 3. Compress the package
echo "🤐 Compressing files..."
# Capture current directory to return later
CURRENT_DIR=$(pwd)
cd "$STANDALONE_ROOT"
# Create tarball in the original project root
tar -czf "$CURRENT_DIR/web.tar.gz" .
cd "$CURRENT_DIR"

echo "   Package created: web.tar.gz"

# 4. Upload to server
echo "☁️  Uploading to server..."
scp -F /dev/null -i "$SSH_KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=no web.tar.gz "$SSH_USER@$SERVER_IP:/root/web.tar.gz"

# 5. Deploy on server
echo "🔄 Deploying and restarting service..."
ssh -F /dev/null -i "$SSH_KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=no "$SSH_USER@$SERVER_IP" << EOF
  # Stop existing service
  pm2 stop $APP_NAME > /dev/null 2>&1 || true
  pm2 delete $APP_NAME > /dev/null 2>&1 || true
  
  # Clean up old files
  rm -rf $REMOTE_DIR
  mkdir -p $REMOTE_DIR
  
  # Extract new files
  echo "   Extracting files..."
  tar -xzf web.tar.gz -C $REMOTE_DIR
  
  # Start service
  echo "   Starting PM2 service..."
  cd $REMOTE_DIR
  export PORT=$PORT
  pm2 start server.js --name $APP_NAME --update-env
  pm2 save
  
  # Clean up tarball
  rm /root/web.tar.gz
EOF

echo "✅ Deployment completed successfully!"
echo "🌍 Verify at: http://$SERVER_IP:$PORT/products or https://tokenlabs.me/products"
