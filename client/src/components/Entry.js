import React, { Component } from "react";

class Entry extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default Entry;
