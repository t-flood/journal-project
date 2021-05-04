import React, { Component } from "react";
import { Link } from "react-router-dom";
import Incrementer from "./Incrementer";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Incrementer />
        <div>
          <ul className="nav">
            <li className="nav-item">
              <button type="button" className="btn btn-link">
                <Link to="/">Home</Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-link">
                <Link to="/entries/new">New Entry</Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-link">
                <Link to="/entries">Entries</Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-link">
                <Link to="/about">About</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
