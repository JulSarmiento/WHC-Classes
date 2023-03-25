const express = require('express');
const httpStatus = require('http-status');
const products = require('../../db/products');

const router = express.Router();

// get all products
router.get('/', (_req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    data: products
  })  
});

// get product by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === parseInt(id));
  if (product) {
    res.status(httpStatus.OK).json({
      success: true,
      data: product
    });
  } else {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'Product not found'
    });
  }
});

// add new product
router.post('/', (req, res) => {
  const { name, price, description, cuantity } = req.body;
  const product = {
    id: products.length + 1,
    name,
    price,
    description,
    cuantity
  };
  products.push(product);
  res.status(httpStatus.CREATED).json({
    success: true,
    data: products
  });
});

// update product
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, description, cuantity } = req.body;
  const product = products.find((product) => product.id === parseInt(id));
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.cuantity = cuantity;
    res.status(httpStatus.OK).json({
      success: true,
      data: product
    });
  } else {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'Product not found'
    });
  }
});

// delete product
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === parseInt(id));
  if (product) {
    const index = products.indexOf(product);
    products.splice(index, 1);
    res.status(httpStatus.OK).json({
      success: true,
      data: products
    });
  } else {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'Product not found'
    });
  }
});

module.exports = router;