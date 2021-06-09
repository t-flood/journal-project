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

    return (
      <div className="row">
        {this.props.entries.map((entry) => (
          <div key={entry.id} className="col-md-4 mb-4">
            <Entry
              title={entry.title}
              content={entry.content}
              didExercise={entry.did_exercise}
              onDelete={() => this.props.deleteEntry(entry)}
            />
          </div>
        ))}
      </div>
    );
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
