const {
  readTop20Controller,
  readProductDetailsController,
  readCollectionListByCategoryController,
} = require('../controllers/product');
const express = require('express');

const router = express.Router();

routes.get('/top20', readTop20Controller);
routes.get('/product/:id', readProductDetailsController);
routes.get('/collection', readCollectionListByCategoryController);

module.exports = router;
