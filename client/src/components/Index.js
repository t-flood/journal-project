import React, { Component } from "react";
import { connect } from "react-redux";
import { getEntries, deleteEntry, updateEntry } from "../actions";
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
              entry={entry}
              onLike={() =>
                this.props.updateEntry({ id: entry.id, likes: entry.likes + 1 })
              }
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
  updateEntry,
  deleteEntry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
