const Sequelize = require('sequelize');
require('dotenv').config();

// const sequelize = process.env.DB_URL
//     ? new Sequelize(process.env.DB_URL)
//     : new Sequelize(
//         process.env.DB_NAME,
//         process.env.DB_USER,
//         process.env.DB_PASSWORD,
//         {
//             host: 'localhost',
//             dialect: 'postgres',
//         }
//     );
const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const sequelize = new Sequelize(database, username, password, {
    dialect: 'postgres',
    host: 'dpg-cpl59fn109ks73dmh440-a.oregon-postgres.render.com',
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // You may need to set this to false for self-signed certificates
      }
    }
  });

    module.exports = sequelize;

