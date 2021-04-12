import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active">
              <Link to="/">Home</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active">
              <Link to="/entries/new">New Entry</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active">
              <Link to="/entries">Entries</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active">
              <Link to="/about">About</Link>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
