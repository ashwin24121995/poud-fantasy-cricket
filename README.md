# 🏏 POUD Fantasy Sports

**POUD INFRASTRUCTURES PRIVATE LIMITED**

*India's premier 100% free, skill-only fantasy cricket platform*

POUD Fantasy Sports is a modern web application built with Node.js, Express, React, and tRPC that allows cricket fans to create fantasy teams, join contests, and compete based purely on skill—no payments, no luck, just strategy.

---

## ✨ Features

### For Users
- **🎯 Age Gate & Language Selection** - English/Hindi support with state-level restrictions
- **🏏 Fantasy Team Creation** - Build your dream XI with a 100-point budget
- **📊 Live Match Tracking** - Real-time scores and player statistics
- **🏆 Contests & Leaderboards** - Compete in free contests and climb the rankings
- **👤 User Dashboard** - Manage teams, view stats, and track performance
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile

### For Admins
- **👥 User Management** - View and manage all registered users
- **⚽ Match Management** - Add, edit, and manage cricket matches
- **🎮 Player Management** - Manage player database and statistics
- **📈 Analytics Dashboard** - Monitor platform usage and performance

### Technical Features
- **🔐 Authentication** - Secure OAuth-based authentication system
- **🗄️ Database** - MySQL/TiDB with Drizzle ORM
- **🔄 Real-time Updates** - Live match data synchronization
- **🎨 Modern UI** - Built with shadcn/ui and Tailwind CSS
- **📡 tRPC API** - Type-safe end-to-end API calls
- **🚀 Production Ready** - Optimized for Railway deployment

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Wouter** - Lightweight routing
- **tRPC React Query** - Type-safe API calls

### Backend
- **Node.js 22** - JavaScript runtime
- **Express 4** - Web application framework
- **tRPC 11** - End-to-end typesafe APIs
- **Drizzle ORM** - TypeScript ORM for SQL databases
- **MySQL/TiDB** - Relational database

### Development Tools
- **TypeScript** - Type safety across the stack
- **Vite** - Fast build tool and dev server
- **pnpm** - Fast, disk space efficient package manager
- **Vitest** - Unit testing framework

---

## 📁 Project Structure

```
rostermindsports/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and tRPC client
│   │   ├── App.tsx        # Main app component with routing
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Backend Express + tRPC application
│   ├── _core/             # Core framework (auth, context, etc.)
│   ├── db.ts              # Database query helpers
│   ├── routers.ts         # tRPC API routes
│   └── storage.ts         # S3 storage helpers
├── drizzle/               # Database schema and migrations
│   └── schema.ts          # Database tables definition
├── shared/                # Shared types and constants
├── package.json           # Dependencies and scripts
├── todo.md                # Project task tracking
├── API_INTEGRATION.md     # API integration guide
└── RAILWAY_DEPLOYMENT.md  # Deployment instructions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or higher
- pnpm 10.x or higher
- MySQL/TiDB database

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/rostermindsports.git
cd rostermindsports
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=mysql://user:password@localhost:3306/rostermindsports

# Authentication
JWT_SECRET=your-secret-key-here

# OAuth (Manus Auth)
VITE_APP_ID=your-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
OWNER_OPEN_ID=your-open-id
OWNER_NAME=Your Name

# Cricket API (when available)
CRICKET_API_URL=https://api.cricket.com
CRICKET_API_KEY=your-api-key
```

4. **Push database schema:**
```bash
pnpm db:push
```

5. **Start development server:**
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

---

## 📜 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - Type check with TypeScript
- `pnpm test` - Run unit tests
- `pnpm db:push` - Push database schema changes
- `pnpm format` - Format code with Prettier

---

## 🗄️ Database Schema

The application uses the following main tables:

- **users** - User accounts and profiles
- **matches** - Cricket match information
- **players** - Player database
- **fantasyTeams** - User-created fantasy teams
- **teamPlayers** - Players in each fantasy team
- **contests** - Contest information
- **contestEntries** - User entries in contests
- **playerStats** - Player performance statistics
- **leaderboard** - Contest rankings

See `drizzle/schema.ts` for complete schema definition.

---

## 🔌 API Integration

The platform is designed to integrate with external cricket data APIs. See `API_INTEGRATION.md` for detailed integration instructions.

### Required API Endpoints:
- Get upcoming matches
- Get live matches
- Get match details
- Get players for a match
- Get live player statistics
- Get match results

Once API credentials are provided, the platform will automatically sync match data, player statistics, and live scores.

---

## 🚢 Deployment

### Deploy to Railway

1. **Push code to GitHub**
2. **Create Railway project** from GitHub repo
3. **Add database** (PostgreSQL recommended)
4. **Configure environment variables**
5. **Deploy and run migrations**

See `RAILWAY_DEPLOYMENT.md` for complete deployment guide.

### Environment Variables for Production

Ensure all required environment variables are set in Railway:
- `DATABASE_URL` - Automatically set by Railway database
- `JWT_SECRET` - Generate secure random string
- `NODE_ENV=production`
- OAuth configuration variables
- Cricket API credentials (when available)

---

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

Tests are located in `server/*.test.ts` files.

---

## 🎨 Design System

The application uses a custom design system built with:

- **Color Palette:** Orange/cricket theme (primary: orange-600)
- **Typography:** Inter (body), Poppins (headings)
- **Components:** shadcn/ui component library
- **Responsive:** Mobile-first design approach

---

## 🔐 Authentication

The platform uses OAuth-based authentication:

1. User clicks "Login" or "Register"
2. Redirected to Manus OAuth portal
3. User authenticates with Manus
4. Redirected back with session token
5. Session stored in secure HTTP-only cookie

All protected routes require authentication.

---

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All pages and components adapt to different screen sizes.

---

## 🌍 Internationalization

Currently supports:
- **English (en)** - Default language
- **Hindi (hi)** - Hindi translations

Language selection is available in the age gate and can be changed in user profile.

---

## 🛡️ Security

- **Authentication:** OAuth-based with secure session cookies
- **Authorization:** Role-based access control (user/admin)
- **Input Validation:** Zod schema validation on all inputs
- **SQL Injection:** Protected by Drizzle ORM parameterized queries
- **XSS Protection:** React automatically escapes content
- **HTTPS:** Enforced in production (Railway provides SSL)

---

## 📊 Monitoring

### Logs
- Development: Console logs
- Production: Railway logs dashboard

### Metrics
- User registrations
- Active teams
- Contest participation
- Match views

---

## 🤝 Contributing

This is a private project. For questions or issues, contact the project owner.

---

## 📄 License

Proprietary - All rights reserved

---

## 👤 Contact

**POUD INFRASTRUCTURES PRIVATE LIMITED**

- Email: support@poud.com
- Address: A-403, Prathmesh Tower, Lower Parel West, Mumbai, Maharashtra 400013, India

---

## 🎯 Roadmap

### Current Status ✅
- [x] User authentication system
- [x] Age gate with language selection
- [x] Landing page and informational pages
- [x] User dashboard
- [x] Admin panel
- [x] Database schema
- [x] tRPC API endpoints
- [x] Responsive design
- [x] Railway deployment configuration

### Upcoming Features 🚧
- [ ] Cricket API integration
- [ ] Team creation interface
- [ ] Contest joining functionality
- [ ] Live match tracking
- [ ] Leaderboard calculations
- [ ] Push notifications
- [ ] Email notifications
- [ ] Social sharing
- [ ] Player statistics charts
- [ ] Match predictions

### Future Enhancements 🔮
- [ ] Multiple sports support (football, kabaddi)
- [ ] Private leagues
- [ ] Achievement badges
- [ ] Player comparison tools
- [ ] Historical statistics
- [ ] Mobile app (React Native)

---

## 📝 Notes

- **No Mock Data:** All data will be real once API is integrated
- **Free Forever:** Platform is completely free with no monetization
- **Skill-Based:** No luck or random elements in gameplay
- **Compliant:** Follows Indian fantasy sports regulations

---

## 🙏 Acknowledgments

- Built with modern web technologies
- UI components from shadcn/ui
- Icons from Lucide React
- Hosted on Railway

---

**Made with ❤️ for cricket fans across India**
