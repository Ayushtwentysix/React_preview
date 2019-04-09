import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div>
        <div className="lds-roller" style={{ marginTop: "90px" }}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Loader;
