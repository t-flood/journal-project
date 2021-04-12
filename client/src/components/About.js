import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div class="col-md-4 mb-4">
        <h3>About</h3>
        <p>
          This is a personal journal in the form of a microblog. For all the
          tweets you don't want to publish! Click{" "}
          <Link to="/entries/new">Here</Link> to publish a new entry.
        </p>
      </div>
    );
  }
}

export default About;
