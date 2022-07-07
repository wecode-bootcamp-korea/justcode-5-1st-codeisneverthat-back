const userService = require('../services/user');

async function signup(req, res) {
  const { email, password } = req.body;
  try {
    await userService.signup(email, password);
    return res.status(201).json({ message: '회원가입 성공' });
  } catch (err) {
    res.status(500).json({ message: '회원가입 실패' });
    return;
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const token = await userService.login(email, password);
    return res.status(201).json({ token, message: 'SUCCESS' });
  } catch (err) {
    res.status(500).json({ message: '로그인 실패' });
    return;
  }
}

module.exports = { signup, login };
