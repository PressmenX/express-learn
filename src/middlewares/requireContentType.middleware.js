const createError = require("../utils/createError");

const requireContentType = (req, res, next) => {
  const methods = ["POST", "PUT", "PATCH"];

  if (methods.includes(req.method)) {
    const contentType = req.headers["content-type"];

    if (!contentType || !contentType.includes("application/json"))
      createError("Request Gagal, Content-Type tidak valid");
  }

  next()
};

module.exports = requireContentType;
