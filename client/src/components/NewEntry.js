import React, { Component } from "react";
import { connect } from "react-redux";
import { addEntry } from "../actions";
import Form from "./Form";

const initialValues = {
  title: "",
  content: "",
  didExercise: false,
  didRead: false,
};

export class NewEntry extends Component {
  handleSubmit = (values) => {
    this.props.addEntry(values, this.props.history);
  };

  render() {
    return (
      <Form
        title="New Journal Entry"
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = {
  addEntry,
};

export default connect(undefined, mapDispatchToProps)(NewEntry);
