const createError = (message, statusCode) => {
  const err = new Error(message)
  err.status = statusCode

  throw err
}


module.exports = createError