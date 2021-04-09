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
        <h3>New Journal Entry</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <p>
              <label htmlFor="content">Content: </label>
            </p>
            <textarea
              id="content"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            ></textarea>
            <input type="submit" value="Create Entry" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addEntry })(Form);
