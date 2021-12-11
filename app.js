/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  axios.get('https://v2.jokeapi.dev/joke/Any')
    .then((resp) => {
      const { data } = resp;
      console.log(data);
      res.render('getJokes', { data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log('Server Started!');
});
