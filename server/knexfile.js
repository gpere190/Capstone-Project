// Update with your config settings.
require("dotenv").config();

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    charset: "utf8",
  },
};
