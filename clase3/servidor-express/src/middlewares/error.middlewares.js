
const errorMiddleware = (err, _req, res, next) => {
  const { statusCode, message } = err;

  res.status(statusCode).json({
    status: statusCode,
    message,
  });

}

module.exports = errorMiddleware;