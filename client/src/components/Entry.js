import React, { Component } from "react";

class Entry extends Component {
  render() {
    const { title, content, onDelete } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={onDelete}>delete</button>
      </div>
    );
  }
}

export default Entry;
