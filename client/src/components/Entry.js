import React, { Component } from "react";

class Entry extends Component {
  state = {
    likes: 0,
  };

  handleLike = (event) => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    const { title, content, onDelete, didExercise } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text mb-4">{content}</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDisabled"
              checked={didExercise ? "checked" : ""}
              disabled
            />
            <label className="form-check-label" htmlFor="flexCheckDisabled">
              Exercise
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDisabled"
              disabled
            />
            <label className="form-check-label" htmlFor="flexCheckDisabled">
              Read
            </label>
          </div>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
          <button className="btn btn-info" onClick={this.handleLike}>
            {this.state.likes} Likes
          </button>
        </div>
      </div>
    );
  }
}

export default Entry;
