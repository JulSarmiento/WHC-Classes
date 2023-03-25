const express  = require('express');
const httpStatus  = require('http-status');
const productsRouter = require('./products.route');
const router = express.Router();

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    health: 'up',
    enviroment: process.env.ENVIROMENT
  });
}) 
  .use('/products', productsRouter);

module.exports = router;