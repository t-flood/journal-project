import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/entries">Journal Entries</Link>
          </li>
          <li>
            <Link to="/entries/new">New Journal Entry</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
