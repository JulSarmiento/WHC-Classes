const express  = require('express');
const httpStatus  = require('http-status');
const productsRouter = require('./products.route');
const router = express.Router();

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).send('OK');
}) 
  .use('/products', productsRouter);

module.exports = router;