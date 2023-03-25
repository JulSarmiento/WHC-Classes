
const errorMiddleware = (err, _req, res, _next) => {
  const { statusCode, message } = err;

  res.status(statusCode).send({
    status: statusCode,
    message,
  });
}

module.exports = errorMiddleware;