import sequelize from './config/database.js';
import models from './models/index.js';

const migrate = async () => {
  try {
    console.log('🔄 Starting database migration...');
    
    // Test connection
    await sequelize.authenticate();
    console.log('✅ Database connection established');

    // Sync all models
    await sequelize.sync({ alter: true });
    console.log('✅ All models synchronized successfully');

    console.log('\n📊 Database migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
};

migrate();
