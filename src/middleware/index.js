const authCheck = require("./auth.middleware");
const logger = require("./logger.middleware");

module.exports = {
  authCheck,
  logger,
};
