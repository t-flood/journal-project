import React, { Component } from "react";

class Entry extends Component {
  render() {
    const { entry, onDelete, onLike } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{entry.title}</h5>
          <p className="card-text mb-4">{entry.content}</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="did-exercise"
              checked={entry.did_exercise ? "checked" : ""}
              disabled
            />
            <label className="form-check-label" htmlFor="did-exercise">
              Exercise
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="did-read"
              checked={entry.did_read ? "checked" : ""}
              disabled
            />
            <label className="form-check-label" htmlFor="did-read">
              Read
            </label>
          </div>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
          <button className="btn btn-info" onClick={onLike}>
            {entry.likes} Likes
          </button>
        </div>
      </div>
    );
  }
}

export default Entry;
