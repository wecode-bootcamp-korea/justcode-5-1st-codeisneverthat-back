const jwt = require('jsonwebtoken');
// const { UserService } = require('../services/user');
// const { Cart } = require('../controllers/cart');

const { getCartById } = require('../models/cart');
const {
  addCartItem,
  deleteCartItem,
  updateCartItem,
} = require('../services/cart');

const validateToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    const user_id = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = user_id;

    // const foundUser = await getCartById(user_id);
    // req.foundUser = foundUser; // request 객체에 새로운 키값에 찾아진 유저의 정보를 할당하고
    next(); // next() 함수로 다음 미들웨어로 맥락(context)를 연결합니다.
  } catch (err) {
    next(err);
  }
};

// app.use((req, res) => {
//   const { authorization } = req.headers;
//   try {
//     const verified = jwt.verfiy(token, process.env.SECRET_KEY);
//   } catch {
//     res.status(400).json({ message: 'SERVICE DENIED' });
//   }
//   const userId = getUserById(verified.id);
// });
module.exports = { validateToken };
