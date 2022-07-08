// const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
// dotenv.config();
const validateToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    console.log(token);
    const user = jwt.verify(token, process.env.SECRET_KEY);
    console.log(user);
    req.userId = user.id;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { validateToken };
