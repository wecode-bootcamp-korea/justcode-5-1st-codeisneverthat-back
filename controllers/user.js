const { signup, login } = require('../services/user');

async function signupController(req, res) {
  const { email, password } = req.body;
  try {
    await signup(email, password);
    return res.status(201).json({ message: '회원가입 성공' });
  } catch (err) {
    res.status(500).json({ message: '회원가입 실패' });
    return;
  }
}

async function loginController(req, res) {
  const { email, password } = req.body;
  try {
    const token = await login(email, password);
    return res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: '로그인 실패' });
    return;
  }
}

module.exports = { signupController, loginController };
