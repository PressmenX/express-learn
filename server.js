const app = require("./app.js");
const config = require("./src/config/index.js");
const logger = require("./src/utils/logger.js");

const server = app.listen(config.app.port, async () => {
  logger.info("========== Server Berjalan di http://localhost:3000 ==========");
  logger.info(`PID : ${process.pid}`)

  const res = await fetch("http://localhost:3000/products", {
    headers: { authorization: "Bearer pass231" },
  });
  logger.info({ data: await res.json() }, "Response GET /products");

  const res3 = await fetch("http://localhost:3000/health");
  logger.info({ data: await res3.json() }, "Response GET /health");
});

const shutdown = (signal) => {
  logger.info(`${signal} diterima - Memulai proses penutupan...`);

  server.close(() => {
    logger.info("Semua Request selesai - Server dimatikan dengan aman");
    process.exit(0);
  });
};


process.on("SIGTERM", ()=> shutdown("SIGTERM"))
process.on("SIGINT", ()=> shutdown("SIGINT"))