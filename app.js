const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const { productsRouter, usersRouter } = require("./src/routes");
const { logger } = require("./src/middlewares");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(logger);

app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.use("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use((err, req, res, next) => {
  console.log("Error Terdeteksi");
  res.status(err.status ?? 500).json({
    status: "error",
    code: err.status ?? 500,
    message: err.message ?? "Internal Server Error",
  });
});

module.exports = app;
