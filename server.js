require('dotenv').config();

const http = require('http');
const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(productRouter);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const server = http.createServer(app);
const PORT = process.env.PORT || 10010;
server.listen(PORT, () => {
  console.log(`server start : http://localhost:${PORT}/`);
});
