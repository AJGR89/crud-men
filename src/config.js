require("dotenv").config();

const PORT = process.env.PORT ? process.env.PORT : 3000;
const MONGO_CNN = process.env.MONGO_CNN
  ? process.env.MONGO_CNN
  : "mongodb://devuser:devpassword@localhost:27017/crud-men-db?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";

module.exports = {
  PORT,
  MONGO_CNN,
};
