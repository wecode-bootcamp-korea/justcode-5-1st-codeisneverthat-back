const {
  readTop20Controller,
  readProductDetailsController,
} = require('../controllers/product');
const express = require('express');

const routes = express.Router();

routes.get('/top20', readTop20Controller);
routes.get('/product/:id', readProductDetailsController);

module.exports = routes;
