const app = require("./app.js");
const config = require("./src/config/index.js");
const logger = require("./src/utils/logger.js");

const server = app.listen(config.app.port, async () => {
  logger.info("========== Server Berjalan di http://localhost:3000 ==========");
  logger.info(`PID : ${process.pid}`);

  const res = await fetch("http://localhost:3000/products/1", {
    method: "PUT",
    headers: { authorization: "Bearer pass231", 'Content-type' : "application/json" },
    body : JSON.stringify({}),
  });
  logger.info({ data: await res.json() }, "Response PUT /products/1");
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
