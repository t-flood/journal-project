import React, { Component } from "react";

class Entry extends Component {
  render() {
    const { title, content, onDelete } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text mb-4">{content}</p>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Entry;
