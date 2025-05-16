// app.js
const express = require('express');
const app = express();

const mongooseconnection = require('./config/mongoose');
const userModel = require('./models/user');
const debuglog = require('debug')('development:app');

// Middleware to parse JSON bodies (if needed)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/create', async (req, res, next) => {
  try {
    const createdUser = await userModel.create({
      username: 'vivek sharma',
      name: 'vivek sharma',
      email: 'vivek@gmail.com',
      password: 'pass'
    });
    debuglog('User created');
    res.send(createdUser);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send('Error creating user');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});