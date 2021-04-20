import React, { Component } from "react";
import { connect } from "react-redux";
import { addEntry } from "../actions";

class Form extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addEntry(this.state, this.props.history);
  };

  render() {
    return (
      <div>
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            ></textarea>
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
