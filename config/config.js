require('dotenv').config();

module.exports = {
  database: {
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
  },
  salt: process.env.SALT,
  secret_express: process.env.SECRET_EXPRESS,
  redis_host: process.env.REDIS_HOST,
};
