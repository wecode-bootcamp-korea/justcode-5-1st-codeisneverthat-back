const prisma = require('./prisma-client');
const prismaClient = require('./prisma-client');

async function createUser(createUserDto) {
  const { email, password } = createUserDto;

  await prisma.$queryRaw`
   INSERT INTO
    users (email, password)
   VALUES (${email}, ${password})`;
}

async function readUserByEmail(email) {
  const [user] = await prisma.$queryRaw`
 SELECT
  id,
  email,
  password
 FROM users
 WHERE email = ${email}
`;
  return user;
}

module.exports = { createUser, readUserByEmail };
