const app = require("./app.js");
const config = require("./src/config/index.js");
const logger = require("./src/utils/logger.js");

app.listen(config.app.port, async () => {
  logger.info("========== Server Berjalan di http://localhost:3000 ==========");

  const res = await fetch("http://localhost:3000/products", {
    headers: { authorization: "Bearer pass231" },
  });
  logger.info({ data: await res.json() }, "Response GET /products");
  
  const res3 = await fetch("http://localhost:3000/products/4", {
    method: "DELETE",
    headers: { authorization: "Bearer pass231" },
  });
  logger.info({ data: await res3.json() }, "Response DELETE /products/4");
});
