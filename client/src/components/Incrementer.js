import React, { Component } from "react";

export class Incrementer extends Component {
  state = { value: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const incrementBy = parseInt(this.state.value, 10);
    this.props.onChangeIncrementBy(incrementBy);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Increment:
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Incrementer;
