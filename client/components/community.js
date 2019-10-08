import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import About from "./about";
import Posts from "./posts";

const posts = [
  {
    author: "Just some guy",
    title: "A Really Interesting Post In This Here Community"
  },
  {
    author: "The Hyper Cat Enthusiast",
    title: "10 Things People Don't Know About Your Cat"
  },
  {
    author: "Admin",
    title: "Announcements About This Community"
  }
];

export default class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "foocommunity",
      about: "This is the community's description",
      posts
    };
  }
  render() {
    return (
      <div className="community">
        <div className="community-header">
          <Link to={`/${this.state.name}/about`}>About</Link>
          <Link to={`/${this.state.name}/posts`}>Posts</Link>
          <Link to={`/${this.state.name}/messages`}>Messages</Link>
        </div>
        <div className="community-container">
          <Switch>
            {/* https://tylermcginnis.com/react-router-pass-props-to-components/ */}
            <Route
              path="/:community/about"
              render={props => (
                <About
                  {...props}
                  info={this.state.about}
                  name={this.state.name}
                />
              )}
            />
            <Route
              path="/:community/posts"
              render={props => <Posts {...props} posts={posts} />}
            />
            {/*<Route path="/:community/posts" component={Posts} />
        <Route path="/:community/messages" component={ComMessages} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
