const bcrypt = require('bcrypt');
const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
const { readUserByEmail, createUser } = require('../models/user');

const salt = bcrypt.genSaltSync();

async function signup(email, password) {
  if (password.length < 5) {
    const error = new Error('비밀번호는 최소 5자 입니다');
    error.statusCode = 400;
    throw error;
  }

  const user = await readUserByEmail(email);

  if (user) {
    const error = new Error('이미 존재하는 회원입니다');
    error.statusCode = 409;
    throw error;
  }

  const createUserDto = {
    email,
    password: bcrypt.hashSync(password, salt),
  };

  await createUser(createUserDto);
}

async function login(email, password) {
  if (!email.includes('@')) {
    res.status(400).json({ message: 'Email or password is incorrect' });
    return;
  }

  if (password.length < 5) {
    res.status(400).json({ message: 'Email or password is incorrect' });
    return;
  }

  const user = await readUserByEmail(email);

  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });
    return token;
  } else {
    const error = new Error('Login fails');
    error.statusCode = 400;
    throw error;
  }
}

module.exports = { signup, login };
