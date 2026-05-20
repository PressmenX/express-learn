const express = require("express");
const app = express();
const { productsRouter, usersRouter } = require("./src/routes");
const { logger } = require('./src/middleware');

app.use(express.json());

app.use(logger)
app.use("/products", productsRouter)
app.use("/users", usersRouter)

module.exports = app;
