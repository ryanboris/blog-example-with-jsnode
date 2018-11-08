/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const postDb = require('./data/helpers/postDb');
const userDb = require('./data/helpers/userDb');

const server = express();
server.use(express.json(), cors());

server.get('/users', (req, res) => {
  userDb
    .get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err, res.status(500).json({ error: 'Error getting users from database' }));
    });
});

server.listen(8000, () => {
  console.log('Running on port 8000');
});