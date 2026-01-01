import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-secondary-900">
            Welcome, {user?.name || user?.username}!
          </h1>
          <p className="text-secondary-600 mt-2">
            Your fantasy cricket dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-semibold text-secondary-700 mb-2">My Teams</h3>
            <p className="text-3xl font-bold text-primary">0</p>
            <p className="text-sm text-secondary-600 mt-1">Teams created</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-secondary-700 mb-2">Contests</h3>
            <p className="text-3xl font-bold text-primary">0</p>
            <p className="text-sm text-secondary-600 mt-1">Contests joined</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-secondary-700 mb-2">Rank</h3>
            <p className="text-3xl font-bold text-primary">-</p>
            <p className="text-sm text-secondary-600 mt-1">Global ranking</p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
          <p className="text-secondary-600">
            Match data will be available once the API is integrated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
