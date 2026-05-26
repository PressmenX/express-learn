const pino = require("pino");
const config = require("../config");

const isDevelopment = config.app.env === "development";

const logger = pino({
  level: isDevelopment ? "debug" : "info",
  transport: isDevelopment
    ? { target: "pino-pretty", options: { colorize: true } }
    : undefined,
});

module.exports = logger