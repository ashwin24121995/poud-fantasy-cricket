import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Support both DATABASE_URL (Railway format) and individual connection parameters
let sequelize;

if (process.env.DATABASE_URL) {
  // Use DATABASE_URL if provided (Railway MySQL format)
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: {
      connectTimeout: 60000
    }
  });
} else {
  // Fall back to individual connection parameters
  sequelize = new Sequelize(
    process.env.DB_NAME || 'railway',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      dialect: 'mysql',
      logging: process.env.NODE_ENV === 'development' ? console.log : false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      dialectOptions: {
        connectTimeout: 60000
      }
    }
  );
}

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
    return true;
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
    return false;
  }
};

export default sequelize;
