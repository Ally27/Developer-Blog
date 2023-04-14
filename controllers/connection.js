const Sequelize = require("sequelize");
require("dotenv").config();

let sequlize;
if (process.env.JAWSDB_URL) {
  sequlize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequlize = new Sequlize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORd,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequlize
