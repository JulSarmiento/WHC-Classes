const express = require('express');

const indexRotuer = require('./src/routes/index.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', indexRotuer);


module.exports = app;