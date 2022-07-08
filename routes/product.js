const {
  readTop20,
  readProductDetails,
  readCollectionListByCategory,
} = require('../controllers/product');
const express = require('express');

const router = express.Router();

router.get('/top20', readTop20);
router.get('/product', readProductDetails);
router.get('/collections', readCollectionListByCategory);

module.exports = router;
