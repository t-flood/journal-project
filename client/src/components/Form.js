import React, { Component } from "react";
import { connect } from "react-redux";
import { addEntry } from "../actions";
import MyDTPicker from "./MyDTPicker";

class Form extends Component {
  state = {
    title: "",
    content: "",
    didExercise: false,
    didRead: false,
    date: "",
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addEntry(this.state, this.props.history);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <MyDTPicker />
        <div className="col-md-4 mb-4">
          <h3>New Journal Entry</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-4 mb-4">
            <label htmlFor="title" className="form-label">
              Title:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col-md-4 mb-4">
            <p>
              <label htmlFor="content" className="form-label">
                Content:{" "}
              </label>
            </p>
            <textarea
              id="content"
              className="form-control"
              name="content"
              value={this.state.content}
              onChange={this.handleInputChange}
            ></textarea>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="didExercise"
                checked={this.state.didExercise}
                id="didExerciseCheck"
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Exercise
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="didRead"
                checked={this.state.didRead}
                id="didReadCheck"
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Read
              </label>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Create Entry
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addEntry })(Form);
