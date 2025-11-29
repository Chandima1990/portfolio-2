# Portfolio Next.js Application - Docker Migration Guide

> **Quick Start Guide for Portfolio Application**  
> **Application:** Next.js Portfolio  
> **Migration Date:** November 29, 2025

---

## 📋 What's Been Created

The following Docker files have been created for your portfolio application:

1. ✅ `Dockerfile` - Multi-stage build for Next.js
2. ✅ `.dockerignore` - Optimizes build context
3. ✅ `docker-compose.staging.yml` - Staging environment
4. ✅ `docker-compose.production.yml` - Production environment
5. ✅ `.github/workflows/deploy-docker.yml` - Automated deployment via GitHub Actions

---

## 🚀 Quick Start - Test Locally

### Step 1: Build the Docker Image

```powershell
# Build the image
docker build -t portfolio:test .
```

### Step 2: Run the Container Locally

```powershell
# Run the container
docker run -d --name portfolio-test -p 3000:3000 portfolio:test

# Check if it's running
docker ps

# View logs
docker logs -f portfolio-test

# Test in browser
# Open http://localhost:3000
```

### Step 3: Clean Up Test

```powershell
# Stop and remove
docker stop portfolio-test
docker rm portfolio-test
docker rmi portfolio:test
```

---

## 🔧 Deploy to VPS (Manual Method)

### Prerequisites on VPS

1. Install Docker (if not already installed):
```bash
# On your VPS (Linux)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo systemctl enable docker
sudo systemctl start docker

# Install Docker Compose
sudo apt-get update
sudo apt-get install -y docker-compose-plugin
```

2. Create deployment directories:
```bash
# On your VPS
mkdir -p ~/docker/portfolio-staging
mkdir -p ~/docker/portfolio-production
```

### Deploy to Staging

**On your local machine (Windows PowerShell):**

```powershell
# 1. Build and save the Docker image
docker build -t portfolio:staging .
docker save portfolio:staging | gzip > portfolio-staging.tar.gz

# 2. Copy files to VPS (replace with your VPS details)
scp portfolio-staging.tar.gz your-user@YOUR_VPS_IP:/tmp/
scp docker-compose.staging.yml your-user@YOUR_VPS_IP:~/docker/portfolio-staging/docker-compose.yml
```

**On your VPS (SSH):**

```bash
# 1. Load the Docker image
cd ~/docker/portfolio-staging
docker load < /tmp/portfolio-staging.tar.gz
rm /tmp/portfolio-staging.tar.gz

# 2. Update docker-compose.yml to use the loaded image
# Edit docker-compose.yml and change:
#   build:
#     context: .
#     dockerfile: Dockerfile
# to:
#   image: portfolio:staging

# You can use sed to do this automatically:
sed -i 's/build:/image: portfolio:staging/g' docker-compose.yml
sed -i '/context:/d' docker-compose.yml
sed -i '/dockerfile:/d' docker-compose.yml

# 3. Stop PM2 if running (optional)
pm2 list
pm2 stop portfolio-staging
pm2 delete portfolio-staging
pm2 save

# 4. Start with Docker
docker compose up -d

# 5. Check status
docker ps
docker logs -f portfolio-staging

# 6. Test health
curl http://localhost:3001/
```

### Deploy to Production

Follow the same steps as staging, but:
- Use production port (3000)
- Use `docker-compose.production.yml`
- Stop PM2 production process

```bash
# On VPS
cd ~/docker/portfolio-production

# Load image
docker load < /tmp/portfolio-production.tar.gz

# Update docker-compose.yml for production
sed -i 's/build:/image: portfolio:production/g' docker-compose.yml
sed -i '/context:/d' docker-compose.yml
sed -i '/dockerfile:/d' docker-compose.yml

# Stop PM2 production
pm2 stop portfolio
pm2 delete portfolio
pm2 save

# Start with Docker
docker compose up -d

# Verify
docker ps
docker logs -f portfolio-production
curl http://localhost:3000/
```

---

## 🤖 Automated Deployment (GitHub Actions)

The workflow file `.github/workflows/deploy-docker.yml` has been created for automatic deployments.

### Setup GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add:

1. `VPS_USER` - Your VPS SSH username
2. `VPS_HOST` - Your VPS IP address
3. `VPS_PORT` - SSH port (optional, default: 22)
4. `VPS_SSH_KEY` - Your SSH private key

### How It Works

- Every push to `main` branch triggers the workflow
- Builds Docker image with timestamp tag
- Uploads image to VPS
- Deploys to staging environment
- Performs health checks

You can also trigger manually from GitHub Actions tab.

---

## 🛠️ Common Management Commands

### View Containers
```bash
docker ps                          # Running containers
docker ps -a                       # All containers
```

### View Logs
```bash
docker logs portfolio-staging               # All logs
docker logs -f portfolio-staging            # Follow logs
docker logs --tail 100 portfolio-staging    # Last 100 lines
docker logs --since 1h portfolio-staging    # Last hour
```

### Restart Container
```bash
docker restart portfolio-staging
```

### Stop/Start Container
```bash
docker stop portfolio-staging
docker start portfolio-staging
```

### Update Application
```bash
# Pull latest code and rebuild
cd ~/docker/portfolio-staging
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Shell Access
```bash
docker exec -it portfolio-staging sh
```

### Resource Monitoring
```bash
docker stats portfolio-staging
```

### Cleanup Old Images
```bash
# Remove old images (keep last 3)
docker images 'portfolio' --format '{{.ID}} {{.CreatedAt}}' | \
  sort -rk 2 | \
  tail -n +4 | \
  awk '{print $1}' | \
  xargs -r docker rmi

# Remove all unused resources
docker system prune -a
```

---

## 🔍 Troubleshooting

### Container Won't Start

```bash
# Check logs
docker logs portfolio-staging

# Run interactively for debugging
docker run -it --rm portfolio:staging sh
```

### Port Already in Use

```bash
# Find what's using the port
ss -tlnp | grep 3001

# Stop PM2 if needed
pm2 stop all
pm2 delete all
```

### Application Not Accessible

```bash
# Test inside container
docker exec portfolio-staging curl http://localhost:3000/

# Check if port is listening
docker exec portfolio-staging netstat -tlnp | grep 3000

# Check reverse proxy (Apache/Nginx)
sudo systemctl status apache2
# or
sudo systemctl status nginx
```

### Out of Disk Space

```bash
# Check disk usage
df -h
docker system df

# Clean up
docker system prune -a
docker image prune -a
docker container prune
```

---

## ✅ Verification Checklist

Before considering migration complete:

- [ ] Docker container starts successfully
- [ ] Application accessible via localhost:PORT
- [ ] Application accessible via public domain
- [ ] SSL/HTTPS works correctly
- [ ] All pages load correctly
- [ ] Contact form works (if applicable)
- [ ] Theme switcher works
- [ ] Images load correctly
- [ ] Container restarts automatically on crash
- [ ] Logs are accessible
- [ ] No errors in container logs

---

## 📊 Port Configuration

| Environment | Container Port | Host Port | Access URL |
|-------------|---------------|-----------|------------|
| Staging | 3000 | 3001 | http://localhost:3001 |
| Production | 3000 | 3000 | http://localhost:3000 |

**Note:** Adjust these ports in the docker-compose files if needed for your setup.

---

## 🔄 Update Your Nginx/Apache Configuration

If you're using a reverse proxy, update your configuration to point to the new Docker ports:

### Nginx Example
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Apache Example
```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
</VirtualHost>
```

---

## 🎉 Next Steps

1. ✅ Test locally with `docker build` and `docker run`
2. ✅ Deploy to staging environment
3. ✅ Monitor staging for 24-48 hours
4. ✅ Deploy to production
5. ✅ Set up GitHub Actions (optional)
6. ✅ Remove PM2 completely once stable

---

## 📚 Additional Notes

- **Build time:** First build takes ~5-10 minutes, subsequent builds are faster
- **Image size:** ~200-300MB (optimized with multi-stage build)
- **Memory usage:** ~100-200MB per container
- **Startup time:** ~5-10 seconds

---

**Good luck with your Docker migration!** 🚀🐳

For issues, refer to the main `MIGRATION-GUIDE-PM2-TO-DOCKER.md` for more detailed troubleshooting.
