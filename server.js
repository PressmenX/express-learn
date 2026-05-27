const app = require("./app.js");
const config = require("./src/config/index.js");
const logger = require("./src/utils/logger.js");

const server = app.listen(config.app.port, async () => {
  logger.info("========== Server Berjalan di http://localhost:3000 ==========");
  logger.info(`PID : ${process.pid}`);

  const res1 = await fetch("http://localhost:3000/categories", {
    method : "POST",
    headers : {'content-type' : 'application/json'},
    body : JSON.stringify({ id : 7})
  });
  logger.info({ response : await res1.json() }, "Response GET /categories");

  const res = await fetch("http://localhost:3000/categories");
  logger.info({ response : await res.json() }, "Response GET /categories");
});

const shutdown = (signal) => {
  logger.info(`${signal} diterima - Memulai proses penutupan...`);

  server.close(() => {
    logger.info("Semua Request selesai - Server dimatikan dengan aman");
    process.exit(0);
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
