const authCheck = require("./auth.middleware");
const asyncHandler = require("./errorHandler.middleware");
const logger = require("./logger.middleware");

module.exports = {
  authCheck,
  logger,
  asyncHandler
};
