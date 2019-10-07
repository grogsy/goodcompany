import React from "react";
import { Link } from "react-router-dom";

export default class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "foocommunity"
    };
  }
  render() {
    return (
      <div>
        <Link to={`/${this.state.name}/about`}>About</Link>
        <Link to={`/${this.state.name}/posts`}>Posts</Link>
        <Link to={`/${this.state.name}/messages`}>Messages</Link>
      </div>
    );
  }
}
