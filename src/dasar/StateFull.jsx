import React, { Component } from "react";

export default class StateFull extends Component {
  render() {
    return (
      <>
        <h1>StateFull {this.props.nama}</h1>
        <br />
        job: {this.props.job}
      </>
    );
  }
}
