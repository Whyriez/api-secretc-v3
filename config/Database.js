import { Sequelize } from "sequelize";

// const db = new Sequelize("secret", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// database: secret-chat
// username: ynwmoonzqr6hqfxp020b
// host: aws.connect.psdb.cloud
// password: pscale_pw_cEAUOs6N3bUvIe2bSEaWBCW9o4GwGiJHmiPDJAKe6lj


const db = new Sequelize(
<<<<<<< HEAD
  process.env.DATABASE,
=======
  "secret-chat",
>>>>>>> 410f9f06431038516f628dd45d72f85e476ae6e3
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }
);

export default db;
