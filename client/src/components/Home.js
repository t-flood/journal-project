import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-4 mb-4">
          <h1>Journal</h1>
          <p>
            This is my personal journal app. You can use it too! Click the link.{" "}
            <a href="https://github.com/t-flood/journal-project">Github</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
