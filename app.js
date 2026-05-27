const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const { productsRouter, usersRouter, categoryRouter } = require("./src/routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");
const logger = require("./src/utils/logger");
const requireContentType = require("./src/middlewares/requireContentType.middleware");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requireContentType)

app.use("/products", productsRouter);
app.use("/categories", categoryRouter)
app.use("/users", usersRouter);

app.use("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use((err, req, res, next) => {
  logger.error("Error Terdeteksi");
  res.status(err.status ?? 500).json({
    status: "error",
    code: err.status ?? 500,
    message: err.message ?? "Internal Server Error",
  });
});

module.exports = app;
