import { Sequelize } from "sequelize";

// const db = new Sequelize("secret", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

const db = new Sequelize(
  "secret-chat",
  "a9627n062go85cg42n92",
  "pscale_pw_LIgY5s7TezAAbfmqQRHX59OwrCgdEDy56fNTD9LPS6C",
  {
    host: "ap-southeast.connect.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }
);

export default db;
