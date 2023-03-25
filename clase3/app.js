const express = require('express');

const indexRotuer = require('./src/routes/index.route');
const errorHandlers = require('./src/middlewares/error.middlewares');

const app = express();


app.get('/', (_req, res) => {
  res.send('Esta es mi primera aplicacion en Express');
});

app.use('/api/v1', indexRotuer);


app.use(errorHandlers);


module.exports = app;