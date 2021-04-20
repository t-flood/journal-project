import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div className="col-md-12 mb-4">
        <div className="alert alert-danger" role="alert">
          There was an error!
        </div>
      </div>
    );
  }
}

export default Error;
