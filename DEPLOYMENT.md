# Deployment Guide

Complete guide to deploy Image Compressor to production on various platforms.

## Table of Contents

1. [Vercel (Recommended)](#vercel-recommended)
2. [Netlify](#netlify)
3. [Self-Hosted (Linux/Docker)](#self-hosted)
4. [Cloud Platforms](#cloud-platforms)
5. [Performance Optimization](#performance-optimization)
6. [Monitoring & Analytics](#monitoring--analytics)

---

## Vercel (Recommended)

**Why Vercel?**
- Built for Next.js (same company)
- Free tier for personal projects
- Automatic deployments on git push
- Global CDN for fast delivery
- No environment setup needed

### Prerequisites

1. GitHub/GitLab/Bitbucket account
2. Vercel account (sign up at vercel.com)

### Deployment Steps

#### Option 1: Via Git (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/image-compressor.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Visit https://vercel.com/new
   - Click "Import Git Repository"
   - Select your repository
   - Framework: Next.js (auto-detected)
   - Build Settings: Leave as default
   - Click "Deploy"

3. **Configure Environment** (if needed)
   - No environment variables needed for this project
   - Go to Project Settings > Environment Variables if you add any

#### Option 2: Direct Upload

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### Post-Deployment

1. **Verify Deployment**
   - Check status at vercel.com/dashboard
   - Visit your deployment URL (e.g., image-compressor.vercel.app)

2. **Set Custom Domain**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

3. **Enable Auto Deployments**
   - Automatic: Every git push to main/master
   - Preview: Every pull request

### Vercel Free Tier Limits

- ✅ Unlimited deployments
- ✅ Global CDN included
- ✅ Automatic SSL certificates
- ✅ Free analytics
- ✅ 100GB bandwidth/month
- ✅ Perfect for this project (no backend)

---

## Netlify

### Prerequisites

- GitHub/GitLab/Bitbucket account
- Netlify account (signup at netlify.com)

### Deployment Steps

1. **Create `netlify.toml`** in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next/static"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Push to Git**
   ```bash
   git push origin main
   ```

3. **Connect Netlify**
   - Visit netlify.com/drop
   - Or go to https://app.netlify.com/sites
   - Click "New site from Git"
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

4. **Wait for Build**
   - Build logs visible in real-time
   - Deploy completes in ~2-3 minutes

### Netlify Free Tier

- ✅ Unlimited builds
- ✅ Global CDN
- ✅ HTTPS included
- ✅ 300 minutes/month build time
- ✅ Sufficient for this project

---

## Self-Hosted

### Prerequisites

- Linux server (Ubuntu 20.04 LTS recommended)
- Node.js 18+ installed
- Optional: Docker, PM2, Nginx

### Local Development Build

```bash
# Build optimized production version
npm run build

# Test production build locally
npm start

# Visit http://localhost:3000
```

### Option 1: Direct Node.js

```bash
# SSH into your server
ssh user@your-server.com

# Clone repository
git clone https://github.com/YOUR_USERNAME/image-compressor.git
cd image-compressor

# Install dependencies
npm install

# Build
npm run build

# Start server
npm start
```

Server runs on port 3000 by default.

### Option 2: PM2 (Process Manager)

PM2 keeps your app running and restarts on crashes.

```bash
# Install PM2 globally
npm install -g pm2

# Create ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'image-compressor',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
EOF

# Start with PM2
pm2 start ecosystem.config.js

# Set to restart on system reboot
pm2 startup
pm2 save
```

### Option 3: Docker

#### Create Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/.next ./.next
EXPOSE 3000

CMD ["npm", "start"]
```

#### Build & Run Docker Image

```bash
# Build image
docker build -t image-compressor:latest .

# Run container
docker run -d \
  -p 3000:3000 \
  --name image-compressor \
  --restart unless-stopped \
  image-compressor:latest

# View logs
docker logs image-compressor

# Stop container
docker stop image-compressor
```

#### Docker Compose

```yaml
version: '3.8'
services:
  image-compressor:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs
```

### Option 4: Nginx Reverse Proxy

```nginx
upstream image_compressor {
  server localhost:3000;
}

server {
  listen 80;
  server_name your-domain.com;

  # Redirect HTTP to HTTPS
  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl http2;
  server_name your-domain.com;

  # SSL certificates (use Let's Encrypt)
  ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

  # Security headers
  add_header Strict-Transport-Security "max-age=31536000" always;
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-Content-Type-Options "nosniff" always;

  # Compression
  gzip on;
  gzip_types text/plain text/css application/json application/javascript;

  location / {
    proxy_pass http://image_compressor;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  # Cache static assets
  location /_next/static/ {
    expires 365d;
    add_header Cache-Control "public, max-age=31536000, immutable";
  }
}
```

#### Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot certonly --nginx -d your-domain.com

# Auto-renew
sudo certbot renew --dry-run
```

---

## Cloud Platforms

### AWS

#### Using Elastic Beanstalk

```bash
# Install EB CLI
pip install awsebcli --upgrade --user

# Initialize EB project
eb init -p "Node.js 18 running on 64bit Amazon Linux 2" image-compressor

# Create environment
eb create production

# Deploy
eb deploy

# View logs
eb logs

# Open in browser
eb open
```

#### Using EC2

1. Launch t3.micro instance (free tier)
2. SSH into instance
3. Follow "Self-Hosted" Docker steps above
4. Configure security group to allow port 80, 443

### Google Cloud

#### Using Cloud Run

```bash
# Install Google Cloud SDK
# https://cloud.google.com/sdk/docs/install

# Authenticate
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Build and deploy
gcloud run deploy image-compressor \
  --source . \
  --platform managed \
  --region us-central1 \
  --memory 256Mi \
  --cpu 1
```

### Azure

#### Using App Service

```bash
# Install Azure CLI
# https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login
az login

# Create resource group
az group create --name rg-image-compressor --location eastus

# Create App Service plan
az appservice plan create \
  --name plan-image-compressor \
  --resource-group rg-image-compressor \
  --sku FREE

# Deploy from GitHub
az webapp create \
  --name image-compressor \
  --resource-group rg-image-compressor \
  --plan plan-image-compressor

# Connect GitHub
az webapp deployment source config-zip \
  --resource-group rg-image-compressor \
  --name image-compressor \
  --src-path .
```

---

## Performance Optimization

### Build Optimization

```bash
# Generate optimized build
npm run build

# Analyze bundle size
npm run build
# Check output in .next/static/
```

### Next.js Optimizations (Already Applied)

- ✅ Image optimization
- ✅ Code splitting
- ✅ Static generation where possible
- ✅ CSS minification
- ✅ Tree shaking

### Server Optimizations

```bash
# Enable gzip compression (Nginx example)
gzip on;
gzip_vary on;
gzip_types text/plain text/css text/javascript application/json;

# Add caching headers
location /_next/static {
  expires 365d;
  add_header Cache-Control "public, immutable";
}
```

### CDN Configuration

**For Vercel**: Automatic (included)

**For self-hosted**: 
- Use Cloudflare (free tier)
- Set up origin as your server
- Enable caching
- Add security rules

### Monitor Performance

```bash
# Build size analysis
npm run build
ls -lh .next/static/

# Expected sizes:
# Total bundle: ~50-100KB gzipped
# Main JS: ~30-50KB
# Styles: ~10-20KB
```

---

## Monitoring & Analytics

### Vercel Analytics (Built-in)

- Visit Vercel dashboard
- Real-time metrics included
- View Web Vitals automatically

### Google Analytics

Add to `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Sentry Error Tracking

```bash
npm install @sentry/nextjs

# Initialize
npx @sentry/nextjs-wizard --integration next
```

### Self-Hosted Monitoring

```bash
# PM2 Plus (monitoring dashboard)
pm2 plus

# Uptime monitoring
# https://uptimerobot.com (free tier)

# Error tracking
# https://sentry.io (free tier)
```

---

## Domain Setup

### DNS Configuration

For custom domain `image-compressor.com`:

#### Vercel

1. Go to Project Settings > Domains
2. Enter `image-compressor.com`
3. Add DNS records:
   - A record: `76.76.19.0`
   - CNAME: `cname.vercel-dns.com`

#### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Update nameservers at domain registrar

#### Self-Hosted

1. Update A record to your server IP: `123.45.67.89`
2. Wait for DNS propagation (up to 48 hours)
3. Set up SSL with Let's Encrypt

---

## Post-Deployment Checklist

- [ ] Application loads and responds
- [ ] Image compression works (test all 4 sizes)
- [ ] SEO meta tags present (`<title>`, `<meta>`)
- [ ] All pages accessible (`/`, `/resize-image-*`)
- [ ] Ad slots display correctly
- [ ] Mobile responsive (test on phone)
- [ ] Dark/light mode works (if applicable)
- [ ] Download functionality works
- [ ] Console shows no errors (F12)
- [ ] Performance good (Lighthouse >90)
- [ ] SSL certificate valid (HTTPS)
- [ ] Backups configured (database-less, so N/A)
- [ ] Monitoring/analytics configured
- [ ] Custom domain working
- [ ] Auto-restart on crash (PM2/Docker)

---

## Troubleshooting Deployments

### Build Fails

```bash
# Check Node version
node --version  # Should be 18+

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building locally
npm run build

# Check for TypeScript errors
npm run build
```

### Application Slow

```bash
# Check server resources
free -h        # Memory
df -h          # Disk space
top            # CPU usage

# Restart application
pm2 restart all

# Check logs
pm2 logs

# Scale up instance size if needed
```

### High Memory Usage

```bash
# Limit Node memory
NODE_OPTIONS="--max-old-space-size=256" npm start

# Use swap
sudo fallocate -l 2G /swapfile
```

### SSL Certificate Issues

```bash
# Renew Let's Encrypt
sudo certbot renew

# Verify Nginx config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

## Maintenance

### Regular Tasks

```bash
# Weekly: Check error logs
pm2 logs

# Monthly: Update dependencies
npm update
npm audit fix

# Quarterly: Major version upgrades
npm install next@latest react@latest

# Always: Keep OS patched
sudo apt update && sudo apt upgrade
```

### Backup (Database-less)

This app requires no database backups. However:

```bash
# Backup your code repository
git push origin main

# Backup configuration files
tar -czf backup-config.tar.gz ecosystem.config.js nginx.conf

# Store in cloud storage (Google Drive, Dropbox, AWS S3)
```

---

## Cost Estimates

### Monthly Costs by Platform

| Platform | Free Tier | Paid Tier |
|----------|-----------|-----------|
| **Vercel** | $0 | $20+ |
| **Netlify** | $0 | $19+ |
| **AWS** | $0 (1 year) | $10+ |
| **Google Cloud** | $300 credit | $20+ |
| **DigitalOcean** | $0 | $4+ |
| **Linode** | $0 | $5+ |

**This app recommendation**: Vercel Free or DigitalOcean $4/month

---

## Questions?

Check deployment logs first:

```bash
# Vercel
vercel logs

# Netlify
netlify logs:tail

# PM2
pm2 logs

# Docker
docker logs image-compressor

# Nginx
tail -f /var/log/nginx/error.log
```

---

**Last Updated**: 2024  
**Tested Platforms**: Vercel, Netlify, DigitalOcean, AWS, Docker
