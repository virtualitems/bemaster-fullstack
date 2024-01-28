/**
 * @fileoverview Entry point for the application.
 * @requires express
 * @requires path
 */

// third-party dependencies
const express = require('express');
const path = require('path');

// first-party dependencies
const controllers = require('./controllers/github');

// express app setup
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/github/top/:namespace/:username', controllers.topRepositories);
app.get('*', controllers.defaultRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
