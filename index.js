// // import fs from 'fs';
// const express = require('express');

// const routes = require('./api');
// const appMiddleware = require('./middleware');

// const PORT = process.env.PORT || 3006;
// const app = express();

// appMiddleware(app);
// routes(app);

// app.get('/', (req, res) => {
//   return res.status(200).json({message: 'routes up',});
// });

// app.listen(PORT, () => {
//   console.log(`😎 Server is listening on port ${PORT}`);
// });




'use strict';

const express = require('express');
const mongoose = require('mongoose');
const appMiddleware = require('./middleware');
const routes = require('./api');
// const strategies = require('./api/resources/auth/strategies');
// const {PORT, DATABASE_URL, TEST_DATABASE_URL} = require('../env/config');
const PORT = process.env.PORT || 3010;
mongoose.Promise = global.Promise;

const app = express();

appMiddleware(app);
// strategies(app);
routes(app);

let server;

app.get('/', (req, res) => {
  return res.status(200).json({message: 'routes up',});
});

function runServer(databaseUrl, port = PORT) {
  console.log('starting server');
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT , () => {
        console.log(`Your app is listening on portssss ${PORT}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
    runServer("mongodb+srv://adminix:Joedanger02@jim-info-eny4i.gcp.mongodb.net/test").catch(err => console.error(err));
  };

module.exports = {
	app, runServer, closeServer
};