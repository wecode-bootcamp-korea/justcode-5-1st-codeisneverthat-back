const { readTop20, readProductDetails } = require('../models/product');

const readTop20Controller = async (req, res) => {
  try {
    const top20 = await readTop20();
    console.log(top20);
    return res.status(200).json(top20);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const readProductDetailsController = async (req, res) => {
  try {
    const productDetails = await readProductDetails();
    console.log(productDetails);
    return res.status(200).json({ data: productDetails });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  readTop20Controller,
  readProductDetailsController,
};
