import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEntry } from "../actions";
import Entry from "./Entry";

class Index extends Component {
  render() {
    const entries = this.props.entries.map((entry, i) => (
      <Entry
        key={i}
        title={entry.title}
        content={entry.content}
        onDelete={() => this.props.deleteEntry(entry)}
      />
    ));
    return <div>{entries}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEntry: (entry) => dispatch(deleteEntry(entry)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
