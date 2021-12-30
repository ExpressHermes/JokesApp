var express = require('express');
var request = require('request');
var app = express();
var port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/getJokes/:type', function (req, res) {
  const jokeType = req.params.type;

  if (jokeType === 'dadJokes') {
    request(
      {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
          'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
          'x-rapidapi-key':
            '0fd4d724ffmsh4ea8edb72ad20bdp186caejsn8a504fc2f046',
          useQueryString: true,
        },
      },
      function (err, response, body) {
        if (err) {
          console.log(err);
        } else {
          data = {
            body: JSON.parse(body).body[0],
            urlName: 'dadJokes',
          };
          res.render('getJokes', { data: data });
        }
      }
    );
  } else if (jokeType === 'chuck') {
    request(
      {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        headers: {
          accept: 'application/json',
          'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '0fd4d724ffmsh4ea8edb72ad20bdp186caejsn8a504fc2f046',
          useQueryString: true,
        },
      },
      function (err, response, body) {
        if (err) {
          console.log(err);
        } else {
          data = {
            body: JSON.parse(body),
            urlName: 'chuckJokes',
          };
          res.render('getJokes', { data: data });
        }
      }
    );
  } else if (jokeType === 'geek') {
    request(
      {
        method: 'GET',
        url: 'https://geek-jokes.p.rapidapi.com/api',
        qs: { format: 'json' },
        headers: {
          'x-rapidapi-host': 'geek-jokes.p.rapidapi.com',
          'x-rapidapi-key':
            '0fd4d724ffmsh4ea8edb72ad20bdp186caejsn8a504fc2f046',
          useQueryString: true,
        },
      },
      function (err, response, body) {
        if (err) {
          // console.log(err);
        } else {
          data = {
            body: JSON.parse(body),
            urlName: 'geek',
          };
          res.render('getJokes', data);
        }
      }
    );
  } else if (jokeType === 'manatee') {
    request(
      {
        method: 'GET',
        url: 'https://manatee-jokes.p.rapidapi.com/manatees/random',
        headers: {
          'x-rapidapi-host': 'manatee-jokes.p.rapidapi.com',
          'x-rapidapi-key':
            '0fd4d724ffmsh4ea8edb72ad20bdp186caejsn8a504fc2f046',
          useQueryString: true,
        },
      },
      function (err, response, body) {
        if (err) {
          console.log(err);
        } else {
          data = {
            body: JSON.parse(body),
            urlName: 'manatee',
          };
          res.render('getJokes', data);
        }
      }
    );
  } else if (jokeType === 'ninja') {
    request(
      {
        method: 'GET',
        url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
        headers: {
          'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
          'x-rapidapi-key':
            '0fd4d724ffmsh4ea8edb72ad20bdp186caejsn8a504fc2f046',
          useQueryString: true,
        },
      },
      function (err, response, body) {
        if (err) {
          console.log(err);
        } else {
          data = {
            body: JSON.parse(body),
            urlName: 'ninja',
          };
          res.render('getJokes', { data: data });
        }
      }
    );
  } else {
    data = {
      body: 'This type of Jokes doesnot exist',
      urlName: 'doesnotExist',
    };
    res.render('getJokes', { data: data });
  }
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/getJokes/dadJokes`);
});
