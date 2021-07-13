import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEntry, getEntry } from "../actions";
import Form from "./Form";

export class EditEntry extends Component {
  componentDidMount() {
    this.props.getEntry(this.props.match.params.id);
  }

  handleSubmit = (values) => {
    const id = this.props.match.params.id;
    this.props.updateEntry(id, values, this.props.history);
  };

  render() {
    const { entry } = this.props;

    if (!entry) {
      return <p>Loading...</p>;
    }

    return (
      <Form
        title="Edit Journal Entry"
        initialValues={{
          title: entry.title,
          content: entry.content,
          didExercise: entry.did_exercise,
          didRead: entry.did_read,
        }}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    entry: state.entries.find(
      (entry) => entry.id.toString() === props.match.params.id
    ),
  };
};

const mapDispatchToProps = {
  updateEntry,
  getEntry,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);
