const authCheck = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error("Token tidak valid");
    err.status = 401;
    return next(err);
  }

  console.log(token);
  next();
};

module.exports = authCheck;
