const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    const user_id = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = user_id.id;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { validateToken };
