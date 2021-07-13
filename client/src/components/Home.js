import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-4 mb-4">
          <h1>Journal and Daily Task Tracker</h1>
          <p>
            I try to do 3 things every morning: journal, read, and exercise.
            This app is for tracking those three things. You can use it too!
            Click the link.{" "}
            <a href="https://github.com/t-flood/journal-project">Github</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
