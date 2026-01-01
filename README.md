# POUD - Fantasy Cricket Platform

A standalone Node.js + Express + React fantasy cricket application ready for deployment to Railway or any hosting platform.

## Features

- ✅ JWT-based authentication (email/password)
- ✅ MySQL database with Sequelize ORM
- ✅ React frontend with Tailwind CSS
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
- React 19
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

### Step 2: Deploy Backend to Railway

1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your `poud` repository
4. Railway will detect Node.js and deploy automatically

### Step 3: Add MySQL Database

1. In your Railway project, click "New" → "Database" → "Add MySQL"
2. Railway will create a MySQL instance and provide connection details

### Step 4: Configure Environment Variables

In Railway project settings, add these variables:

```
PORT=5000
DATABASE_URL=${MYSQLURL}
JWT_SECRET=your-super-secret-jwt-key-change-this-to-something-random
NODE_ENV=production
```

Note: `${MYSQLURL}` is automatically provided by Railway's MySQL service.

### Step 5: Run Database Migration

1. In Railway, go to your backend service
2. Click "Settings" → "Deploy" → "Custom Start Command"
3. Add: `node server/migrate.js && node server/index.js`

This will run migrations before starting the server.

### Step 6: Deploy Frontend

Option A: Deploy to Railway (Recommended)

1. In Railway, click "New" → "GitHub Repo" → Select same repository
2. Set root directory to `/client`
3. Add environment variable:
```
VITE_API_URL=https://your-backend-url.railway.app/api
```
4. Railway will build and deploy the frontend

Option B: Deploy to Vercel/Netlify

1. Connect your GitHub repo to Vercel/Netlify
2. Set build settings:
   - Build command: `cd client && npm install && npm run build`
   - Output directory: `client/dist`
3. Add environment variable:
   - `VITE_API_URL`: Your Railway backend URL

### Step 7: Update CORS Settings

After deployment, update `server/index.js` CORS configuration with your frontend URL:

```javascript
app.use(cors({
  origin: ['https://your-frontend-url.railway.app'],
  credentials: true
}));
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user (requires auth)

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

## Security Features

- ✅ Passwords hashed with bcrypt
- ✅ JWT tokens for authentication
- ✅ HTTP-only cookies (optional)
- ✅ CORS configured
- ✅ SQL injection protection (Sequelize ORM)
- ✅ XSS protection

## Future Enhancements

- [ ] Integrate cricket data API
- [ ] Add team creation functionality
- [ ] Implement live scoring
- [ ] Add contest management
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Admin panel

## Support

For issues or questions:
- Email: support@poud.com
- GitHub Issues: https://github.com/yourusername/poud/issues

## License

Copyright © 2025 POUD INFRASTRUCTURES PRIVATE LIMITED. All rights reserved.

**Company Details:**
- CIN: U45209HR2019PTC081289
- PAN: AAKCP6451F
- TAN: RTKP10324G
- Address: C/O NARAYAN SINGH, DERA MUNAK, KARNAL, Karnal, Haryana, India, 132040
