/**
 * @fileoverview APP controllers for /github/ routes
 */


// first-party dependencies
const repositories = require('../repositories/github');


/**
 * @description Get top GitHub repositories from a given user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function topRepositories(req, res) {
  try {
    const namespace = req.params.namespace;
    const username = req.params.username;
    const viewer = new repositories.GitHubViewer();

    if (namespace !== 'user' && namespace !== 'org') {
      throw new Error('valid urls are "/github/top/user/username" or "/github/top/org/username"');
    }

    const topRepositories = await viewer.getTopRepositories(namespace, username, 10);
    res.render('index', { title: `${username}'s top github repositories`, repositories: topRepositories });

  } catch (error) {
    res.render('error', { title: `Error!`, message: error.message});

  }
}


function defaultRoute(req, res) {
  const title = 'Nodejs App';

  res.render('default', { title });
}


/**
 * @exports
 */
module.exports = {
  topRepositories,
  defaultRoute
};
