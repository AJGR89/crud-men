const express = require("express");
const morgan = require("morgan");
const app = express();
const indexRoutes = require("./routes/index.routes");
const { dbConnection } = require("./database");

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use(indexRoutes);

dbConnection();

module.exports = app;
