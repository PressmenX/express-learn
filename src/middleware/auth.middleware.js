const authCheck = (req, res, next) => {
  const  token=  req.headers.authorization

  if (!token) {
   return res.status(401).json({
      error : "Unauthorized",
      message : "Token tidak ada"
    })
  }

  console.log(token);

  next()
}

module.exports = authCheck