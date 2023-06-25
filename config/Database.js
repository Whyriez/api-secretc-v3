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
  "qz5k2iglft2zfkmi963k",
  "pscale_pw_Rut2EsTcL9n3ggCCkyLSvilELYlaSfjFE3fCn3eh6ML",
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
