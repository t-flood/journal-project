import React, { Component } from "react";
import { connect } from "react-redux";
import { getEntries, deleteEntry } from "../actions";
import Entry from "./Entry";

class Index extends Component {
  componentDidMount() {
    this.props.getEntries();
  }

  render() {
    if (this.props.loading) {
      return <h3>Loading...</h3>;
    }
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
    loading: state.loading,
    entries: state.entries,
  };
};

const mapDispatchToProps = {
  getEntries,
  deleteEntry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
