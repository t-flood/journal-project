import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Entry extends Component {
  render() {
    const { title, content, onDelete } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <Button onClick={onDelete}>Delete</Button>
      </div>
    );
  }
}

export default Entry;
