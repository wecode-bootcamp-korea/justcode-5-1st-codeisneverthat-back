const {
  readTop20Controller,
  readProductDetailsController,
  readCollectionListByCategoryController,
} = require('../controllers/product');
const express = require('express');

const router = express.Router();

router.get('/top20', readTop20Controller);
router.get('/product', readProductDetailsController);
router.get('/collections', readCollectionListByCategoryController);

module.exports = router;
