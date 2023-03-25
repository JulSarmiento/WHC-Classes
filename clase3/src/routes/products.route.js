const express = require('express');
const httpStatus = require('http-status');
const products = require('../../db/products');

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(httpStatus.OK).send(products)  
});

module.exports = router;