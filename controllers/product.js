const {
  readTop20,
  readProductDetails,
  readCollectionListByCategory,
} = require('../models/product');

const readTop20Controller = async (req, res) => {
  try {
    const top20 = await readTop20();
    return res.status(200).json(top20);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const readProductDetailsController = async (req, res) => {
  try {
    const { id } = req.query;
    const [productDetails] = await readProductDetails(id);
    return res.status(200).json({ data: productDetails });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const readCollectionListByCategoryController = async (req, res) => {
  try {
    const { category } = req.query;
    const collectionList = await readCollectionListByCategory(category);
    return res.status(200).json(collectionList);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  readTop20Controller,
  readProductDetailsController,
  readCollectionListByCategoryController,
};
