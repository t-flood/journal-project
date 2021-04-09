import React, { Component } from "react";
import { connect } from "react-redux";
import Entry from "./Entry";

class index extends Component {
  render() {
    const entries = this.props.entries.map((entry, i) => (
      <Entry key={i} title={entry.title} content={entry.content} />
    ));
    return <div>{entries}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
  };
};
export default connect(mapStateToProps)(index);
