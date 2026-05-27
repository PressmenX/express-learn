const fs = require("fs");
const logger = require("../utils/logger");

const getDataJSON = (path) => {
  try {
    const data = fs.readFileSync(path, "utf-8");

    if (!data) throw new Error("File tidak ada");
    return JSON.parse(data);
  } catch (err) {
    logger.error({message : err.message}, `Gagal Membaca file ${path}`)
    return []
  }
};

module.exports = getDataJSON;
