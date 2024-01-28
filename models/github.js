/**
 * @fileoverview Github related models
 */


/**
 * @classdesc Github repository owner model
 */
class GithubOwner {
  constructor() {
    this.login = null;
    this.id = null;
    this.node_id = null;
    this.avatar_url = null;
    this.gravatar_id = null;
    this.url = null;
    this.html_url = null;
    this.followers_url = null;
    this.following_url = null;
    this.gists_url = null;
    this.starred_url = null;
    this.subscriptions_url = null;
    this.organizations_url = null;
    this.repos_url = null;
    this.events_url = null;
    this.received_events_url = null;
    this.type = null;
    this.site_admin = null;
  }

  static fromGeneric(generic) {
    const model = new GithubOwner();
    model.login = generic.login;
    model.id = generic.id;
    model.node_id = generic.node_id;
    model.avatar_url = generic.avatar_url;
    model.gravatar_id = generic.gravatar_id;
    model.url = generic.url;
    model.html_url = generic.html_url;
    model.followers_url = generic.followers_url;
    model.following_url = generic.following_url;
    model.gists_url = generic.gists_url;
    model.starred_url = generic.starred_url;
    model.subscriptions_url = generic.subscriptions_url;
    model.organizations_url = generic.organizations_url;
    model.repos_url = generic.repos_url;
    model.events_url = generic.events_url;
    model.received_events_url = generic.received_events_url;
    model.type = generic.type;
    model.site_admin = generic.site_admin;
    return model;
  }
}


/**
 * @classdesc Github repository model
 */
class GithubRepository {
  constructor() {
    this.id = null;
    this.description = null;
    this.full_name = null;
    this.html_url = null;
    this.name = null;
    this.node_id = null;
    this.owner = null;
    this.private = null;
    this.stargazers_count = null;
  }

  static fromGeneric(generic) {
    const model = new GithubRepository();
    model.id = generic.id;
    model.description = generic.description;
    model.full_name = generic.full_name;
    model.html_url = generic.html_url;
    model.name = generic.name;
    model.node_id = generic.node_id;
    model.private = generic.private;
    model.stargazers_count = generic.stargazers_count;
    model.owner = GithubOwner.fromGeneric(generic.owner);
    return model;
  }
}


/**
 * @exports
 */
module.exports = {
  GithubOwner,
  GithubRepository,
};
