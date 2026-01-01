# POUD - Fantasy Cricket Platform

A standalone Node.js + Express + React fantasy cricket application ready for deployment to Railway or any hosting platform.

## Features

- ✅ JWT-based authentication (email/password)
- ✅ MySQL database with Sequelize ORM
- ✅ React 18 frontend with Tailwind CSS
- ✅ RESTful API architecture
- ✅ Responsive design
- ✅ POUD branding throughout

## Tech Stack

**Backend:**
- Node.js + Express.js
- MySQL (via Sequelize ORM)
- JWT for authentication
- bcrypt for password hashing

**Frontend:**
- React 18
- React Router v6
- Axios for API calls
- Tailwind CSS for styling
- Lucide React for icons

## Project Structure

```
poud-standalone/
├── server/                 # Backend code
│   ├── config/            # Database configuration
│   ├── models/            # Sequelize models
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Auth middleware
│   ├── routes/            # API routes
│   ├── migrate.js         # Database migration script
│   └── index.js           # Server entry point
├── client/                # Frontend code
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── context/       # React context
│   │   └── App.jsx        # Main app component
│   └── public/            # Static assets
└── package.json           # Backend dependencies
```

## Local Development Setup

### Prerequisites
- Node.js 18+ installed
- MySQL 8+ installed and running

### Backend Setup

1. Navigate to project root:
```bash
cd poud-standalone
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your MySQL credentials:
```
PORT=5000
DATABASE_URL=mysql://username:password@localhost:3306/poud_db
JWT_SECRET=your-super-secret-jwt-key-change-this
NODE_ENV=development
```

5. Create database:
```bash
mysql -u root -p
CREATE DATABASE poud_db;
EXIT;
```

6. Run migrations:
```bash
node server/migrate.js
```

7. Start backend server:
```bash
npm run dev
```

Backend will run on http://localhost:5000

### Frontend Setup
1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env`:
```
VITE_API_URL=http://localhost:5000/api
```

5. Start frontend dev server:
```bash
npm run dev
```

Frontend will run on http://localhost:5173

## Deployment to Railway

### Step 1: Prepare GitHub Repository

1. Initialize git (if not already):
```bash
cd poud-standalone
git init
git add .
git commit -m "Initial commit"
```

2. Create GitHub repository and push:
```bash
git remote add origin https://github.com/yourusername/poud.git
git branch -M main
git push -u origin main
```

### Step 2: Add MySQL Database on Railway

1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project" → "Provision MySQL"
3. Railway will create a MySQL instance
4. Click on the MySQL service to view connection details
5. Copy the **MYSQL_PUBLIC_URL** (format: `mysql://root:password@host:port/railway`)

### Step 3: Deploy Backend to Railway

1. In your Railway project, click "New" → "GitHub Repo"
2. Select your `poud-fantasy-cricket` repository
3. Railway will detect Node.js and start deployment

### Step 4: Configure Environment Variables

In Railway backend service settings → Variables, add:

```
DATABASE_URL=${{MySQL.MYSQL_PUBLIC_URL}}
JWT_SECRET=your-super-secret-jwt-key-change-this-to-something-random-and-secure
NODE_ENV=production
PORT=5000
```

**Important:** Railway automatically provides `${{MySQL.MYSQL_PUBLIC_URL}}` when you have a MySQL service in the same project. This references your Railway MySQL connection string.

### Step 5: Run Database Migration

The application automatically runs migrations on startup. If you need to run manually:

1. In Railway, go to your backend service
2. Open the service shell/terminal
3. Run: `node server/migrate.js`

Or update the start command in `package.json`:
```json
"start": "node server/migrate.js && node server/index.js"
```

### Step 6: Deploy Frontend (Same Railway Project)

Railway will automatically build and serve the frontend from the `/client` directory using the build configuration in `railway.json`.

The frontend will be available at your Railway deployment URL.

### Step 7: Verify Deployment

1. Check Railway logs for successful database connection
2. Visit your Railway URL to see the POUD homepage
3. Test user registration and login

## Railway Configuration

The project includes `railway.json` with optimized build settings:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && cd client && npm install && npm run build"
  },
  "deploy": {
    "startCommand": "node server/migrate.js && node server/index.js",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

## Environment Variables

### Backend (.env)
```
PORT=5000
DATABASE_URL=mysql://user:pass@host:port/database
JWT_SECRET=your-secret-key
NODE_ENV=production
```

### Frontend (client/.env)
```
VITE_API_URL=https://your-backend-url/api
```

**Note:** On Railway, the frontend uses relative API paths, so `VITE_API_URL` is set to `/api` in production.

## Database Schema

The application uses the following tables:
- `users` - User accounts
- `matches` - Cricket matches
- `players` - Cricket players
- `teams` - Fantasy teams
- `team_players` - Team player selections
- `contests` - Fantasy contests
- `contest_entries` - Contest participations
- `player_stats` - Player statistics
- `leaderboard` - User rankings

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user (requires auth)

### Matches
- `GET /api/matches` - Get all matches
- `GET /api/matches/live` - Get live matches
- `GET /api/matches/upcoming` - Get upcoming matches

### Players
- `GET /api/players` - Get all players
- `GET /api/players/:id` - Get player details

## Security Features

- ✅ Passwords hashed with bcrypt
- ✅ JWT tokens for authentication
- ✅ HTTP-only cookies (optional)
- ✅ CORS configured
- ✅ SQL injection protection (Sequelize ORM)
- ✅ XSS protection

## Cricket API Integration (Coming Soon)

The application is ready to integrate with cricket data APIs. The following sections are prepared:
- **Live Matches** - Real-time match scores and updates
- **Upcoming Matches** - Scheduled matches with countdown timers

To integrate:
1. Obtain API credentials from your cricket data provider
2. Add API endpoints in `server/routes/matches.js`
3. Update frontend components to fetch real data

## Future Enhancements

- [ ] Integrate cricket data API
- [ ] Add team creation functionality
- [ ] Implement live scoring
- [ ] Add contest management
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Payment gateway integration

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is correctly set in Railway environment variables
- Check Railway MySQL service is running
- Ensure connection string format: `mysql://user:password@host:port/database`

### Build Failures
- Check Node.js version (requires 18+)
- Verify all dependencies are in `package.json`
- Review Railway build logs for specific errors

### Frontend Not Loading
- Verify build completed successfully in Railway logs
- Check `client/dist` directory was created during build
- Ensure static file serving is configured in `server/index.js`

## Support

For issues or questions:
- Email: support@poud.com
- GitHub Issues: https://github.com/ashwin24121995/poud-fantasy-cricket/issues

## License

Copyright © 2025 POUD INFRASTRUCTURES PRIVATE LIMITED. All rights reserved.

**Company Details:**
- CIN: U45209HR2019PTC081289
- PAN: AAKCP6451F
- TAN: RTKP10324G
- Address: C/O NARAYAN SINGH, DERA MUNAK, KARNAL, Karnal, Haryana, India, 132040
