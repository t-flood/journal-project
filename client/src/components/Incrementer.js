import React, { Component } from "react";

export class Incrementer extends Component {
  state = { increment: 0 };

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    this.setState({ increment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Increment by " + this.state.increment);
    // <Likes increment={this.state.increment} />;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Increment:
            <input
              type="number"
              value={this.state.increment}
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
