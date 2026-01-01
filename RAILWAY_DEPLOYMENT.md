# Railway Deployment Guide for POUD Fantasy Sports

This guide will walk you through deploying the POUD Fantasy Sports platform to Railway with GitHub integration.

## Prerequisites

1. **GitHub Account** - Create a repository for this project
2. **Railway Account** - Sign up at [railway.app](https://railway.app)
3. **Database** - Railway provides MySQL/PostgreSQL databases

## Step 1: Push Code to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: POUD Fantasy Sports platform"
```

2. Create a new repository on GitHub (e.g., `rostermindsports`)

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/rostermindsports.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Railway Project

1. Go to [railway.app](https://railway.app) and sign in
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your `rostermindsports` repository
5. Railway will automatically detect the Node.js project

## Step 3: Add Database

1. In your Railway project, click **"New"** → **"Database"**
2. Choose **"Add MySQL"** (or PostgreSQL if you prefer)
3. Railway will automatically provision the database and set the `DATABASE_URL` environment variable

**Note:** The user prefers not to use MySQL. Consider using PostgreSQL instead:
- Click **"Add PostgreSQL"** instead of MySQL
- Update the database driver in the code if needed (currently using mysql2)

## Step 4: Configure Environment Variables

In Railway project settings, add the following environment variables:

### Required Environment Variables

```
NODE_ENV=production
DATABASE_URL=<automatically set by Railway database>
JWT_SECRET=<generate a secure random string>
PORT=3000
```

### OAuth Configuration (Manus Auth)
```
VITE_APP_ID=<your Manus app ID>
OAUTH_SERVER_URL=<Manus OAuth server URL>
VITE_OAUTH_PORTAL_URL=<Manus OAuth portal URL>
OWNER_OPEN_ID=<owner's Manus open ID>
OWNER_NAME=<owner's name>
```

### Future: Cricket API Configuration (when API is provided)
```
CRICKET_API_URL=<cricket API base URL>
CRICKET_API_KEY=<cricket API key>
```

### Optional: Analytics & Monitoring
```
VITE_ANALYTICS_ENDPOINT=<analytics endpoint>
VITE_ANALYTICS_WEBSITE_ID=<website ID>
```

## Step 5: Configure Build & Deploy Settings

Railway should auto-detect these from `railway.json`, but verify:

- **Build Command:** `pnpm install && pnpm build`
- **Start Command:** `pnpm start`
- **Node Version:** 22.x (specified in package.json)

## Step 6: Deploy

1. Railway will automatically deploy when you push to the main branch
2. Monitor the deployment logs in Railway dashboard
3. Once deployed, Railway will provide a public URL (e.g., `rostermindsports.up.railway.app`)

## Step 7: Run Database Migrations

After first deployment, you need to push the database schema:

### Option A: Using Railway CLI (Recommended)

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Link to your project:
```bash
railway link
```

4. Run migrations:
```bash
railway run pnpm db:push
```

### Option B: Using Railway Shell

1. Go to your Railway project dashboard
2. Click on your service
3. Go to **"Settings"** → **"Shell"**
4. Run:
```bash
pnpm db:push
```

## Step 8: Enable Auto-Deploy from GitHub

Railway automatically sets up GitHub integration:

1. Every push to the `main` branch will trigger a new deployment
2. Pull requests can create preview deployments (enable in settings)
3. Monitor deployments in the Railway dashboard

## Step 9: Custom Domain (Optional)

1. In Railway project, go to **"Settings"** → **"Domains"**
2. Click **"Generate Domain"** for a free Railway subdomain
3. Or click **"Custom Domain"** to add your own domain
4. Update DNS records as instructed by Railway

## Step 10: Monitoring & Logs

- **View Logs:** Click on your service → **"Logs"** tab
- **Metrics:** Monitor CPU, memory, and network usage
- **Alerts:** Set up alerts for errors or downtime

## Environment-Specific Configuration

### Development vs Production

The app automatically detects the environment via `NODE_ENV`:

- **Development:** `NODE_ENV=development` (local)
- **Production:** `NODE_ENV=production` (Railway)

### Database Connection

Railway automatically provides `DATABASE_URL` in the format:
```
mysql://user:password@host:port/database
```

The app uses this connection string automatically via `drizzle-orm`.

## Troubleshooting

### Build Fails

1. Check Railway build logs for errors
2. Verify all dependencies are in `package.json`
3. Ensure `pnpm` is being used (specified in `packageManager` field)

### Database Connection Errors

1. Verify `DATABASE_URL` is set correctly
2. Check if database service is running
3. Ensure database migrations have been run (`pnpm db:push`)

### OAuth Errors

1. Verify all Manus OAuth environment variables are set
2. Check that the OAuth callback URL is configured correctly in Manus dashboard
3. Update OAuth redirect URLs to include your Railway domain

### Port Issues

Railway automatically assigns a port via the `PORT` environment variable. The app should listen on `process.env.PORT || 3000`.

## Scaling & Performance

### Vertical Scaling
- Railway allows you to increase CPU and memory in project settings
- Adjust based on traffic and performance metrics

### Horizontal Scaling
- For high traffic, consider Railway's Pro plan for multiple instances
- Implement caching (Redis) for frequently accessed data

### Database Optimization
- Add indexes to frequently queried columns
- Use connection pooling (already configured in drizzle-orm)
- Consider read replicas for high read traffic

## Cost Optimization

- Railway offers $5/month free credit
- Monitor usage in the billing dashboard
- Optimize database queries to reduce CPU usage
- Implement caching to reduce database calls

## Continuous Integration

### GitHub Actions (Optional)

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 10
      - uses: actions/setup-node@v3
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm check
      - run: pnpm test
```

## Security Best Practices

1. **Never commit `.env` files** - Use Railway environment variables
2. **Use strong JWT secrets** - Generate with `openssl rand -base64 32`
3. **Enable HTTPS** - Railway provides SSL certificates automatically
4. **Implement rate limiting** - Protect against abuse
5. **Regular updates** - Keep dependencies up to date

## Backup Strategy

1. **Database Backups:**
   - Railway Pro plan includes automatic backups
   - Manually export database periodically
   - Store backups in external storage (S3, etc.)

2. **Code Backups:**
   - GitHub serves as primary code backup
   - Tag releases for easy rollback
   - Maintain staging environment for testing

## Rollback Procedure

If a deployment causes issues:

1. Go to Railway project → **"Deployments"**
2. Find the last working deployment
3. Click **"Redeploy"** on that deployment
4. Or push a revert commit to GitHub

## Next Steps After Deployment

1. **Test all features** on the production URL
2. **Configure OAuth** callback URLs for production domain
3. **Set up monitoring** and alerts
4. **Add custom domain** if desired
5. **Integrate cricket API** when credentials are provided
6. **Monitor logs** for any errors or issues

## Support

- **Railway Docs:** https://docs.railway.app
- **Railway Discord:** https://discord.gg/railway
- **Project Issues:** Create issues in your GitHub repository

---

## Quick Deploy Checklist

- [ ] Push code to GitHub
- [ ] Create Railway project from GitHub repo
- [ ] Add database (PostgreSQL recommended)
- [ ] Configure environment variables
- [ ] Deploy application
- [ ] Run database migrations (`pnpm db:push`)
- [ ] Test production deployment
- [ ] Configure custom domain (optional)
- [ ] Set up monitoring and alerts
- [ ] Enable auto-deploy from GitHub

Your POUD Fantasy Sports platform is now live on Railway! 🚀
