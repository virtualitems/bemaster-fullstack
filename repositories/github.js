/**
 * @fileoverview GitHub repository patterns
 * @requires axios
 */

// third-party dependencies
const axios = require('axios');

// first-party dependencies
const models = require('../models/github');


/**
 * @classdesc GitHub data view using repository pattern with the GitHub API
 */
class GitHubViewer {

  /**
   * @description Get top GitHub repositories from a given user
   * @param {string} namespace - GitHub namespace (user or organization)
   * @param {string} username - GitHub username
   * @param {number} count - Number of repositories to return
   * @returns {Promise<Array<models.GithubRepository>>} - Array of GitHub repositories
   */
  async getTopRepositories(namespace, username, count = 10) {

    if (!typeof username === 'string') {
      throw new Error('username must be a string');
    }

    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${namespace}:${username}`, {
        params: {
          sort: 'stars',
          direction: 'desc',
          per_page: count,
        },
      });

      const items = response.data.items;

      return items.map(repo => models.GithubRepository.fromGeneric(repo));

    } catch (error) {
      throw new Error(`Error fetching GitHub repositories: ${error.message}`);

    }
  }
}


/**
 * @exports
 */
module.exports = {
  GitHubViewer,
}
