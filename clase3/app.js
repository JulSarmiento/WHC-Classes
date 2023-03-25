const express = require('express');
const httpStatus = require('http-status');

const indexRotuer = require('./src/routes/index.route');
const errorHandlers = require('./src/middlewares/error.middlewares');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (_req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Hello World'
  })
});

app.use('/api/v1', indexRotuer);


app.use(errorHandlers);


module.exports = app;