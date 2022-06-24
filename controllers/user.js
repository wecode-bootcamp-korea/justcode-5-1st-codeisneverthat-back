const { signup, login } = require('../services/user');

async function signupController(req, res) {
  const { email, password } = req.body;
  try {
    await signup(email, password);
  } catch (err) {
    res.status(500).json({ message: 'not implemented' });
    return;
  }
}

async function loginController(req, res) {
  const { email, password } = req.body;
  try {
    const token = await login(email, password);
  } catch (err) {
    res.status(500).json({ message: 'not implemented' });
    return;
  }

  res.json({ token });
}

module.exports = { signupController, loginController };
