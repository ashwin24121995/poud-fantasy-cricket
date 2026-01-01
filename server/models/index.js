import sequelize from '../config/database.js';
import User from './User.js';

// Import other models here as you create them
// import Match from './Match.js';
// import Player from './Player.js';
// import Team from './Team.js';
// import Contest from './Contest.js';

// Define associations here
// Example:
// User.hasMany(Team);
// Team.belongsTo(User);

const models = {
  User,
  // Add other models here
};

export { sequelize };
export default models;
