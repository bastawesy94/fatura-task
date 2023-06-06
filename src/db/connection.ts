import dotenv from 'dotenv';
import { Sequelize, DataTypes } from "sequelize";
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

// const POSTGRES_URL = process.env.DATABASE_URL;
const sequelize = new Sequelize({
  define: {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    },
    username:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DB,
    host:process.env.POSTGRES_HOST,
    dialect:"postgres",
});
// POSTGRES_URL:POSTGRES_URL
async function connectDB() {
  try {
    await sequelize.sync(); //test connection
    console.log("✅ Connection has been established.");
  }
  catch (err: any) {
    console.log(err);
  }
}

export { connectDB, sequelize, Sequelize, DataTypes };
