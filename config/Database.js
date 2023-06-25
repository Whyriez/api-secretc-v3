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
  "secret-chat",
  "rneua8cjsj490cnqv7ho",
  "pscale_pw_T7D2ZG5hNc2o8XLVTjHQMIWhoJ52h0Wq9JjrK81BAXQ",
  {
    host: "aws.connect.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }
);

export default db;
