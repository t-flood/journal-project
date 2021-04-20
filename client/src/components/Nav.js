import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">
                <Link to="/entries/new">New Entry</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">
                <Link to="/entries">Entries</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">
                <Link to="/about">About</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
