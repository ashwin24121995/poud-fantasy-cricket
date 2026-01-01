import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Trophy, Users, Target, TrendingUp } from 'lucide-react';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: 'Draft Your XI',
      description: 'Pick players with skill, not guesswork.'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: 'Track Live Scores',
      description: 'Ball-by-ball scoring powered by real stats.'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Play Free Contests',
      description: 'Enter head-to-head and leaderboard games.'
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: 'Climb the Rankings',
      description: 'Earn glory, not money—prove your knowledge.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
              Play Fantasy Cricket<br />
              <span className="text-primary">Where Skill Rules the Game</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Welcome to POUD—India's premier fantasy cricket platform built entirely on skill. 
              No payments. No luck. No ads. Just strategy, knowledge, and pure competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn-primary">
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/register" className="btn-primary">
                    Register Now
                  </Link>
                  <Link to="/login" className="btn-outline">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose POUD */}
      <section className="bg-gray-100 py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose POUD?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Always Free</h3>
              <p className="text-secondary-600">
                Join and play without ever paying a rupee.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Skill Decides Outcomes</h3>
              <p className="text-secondary-600">
                No randomness—only smart cricket decisions.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Pure Play, Total Fun</h3>
              <p className="text-secondary-600">
                No payments, no ads—just the sport you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Playing?
          </h2>
          <p className="text-xl text-white mb-8">
            Join POUD today and experience fantasy cricket like never before
          </p>
          {!isAuthenticated && (
            <Link to="/register" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Create Free Account
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
