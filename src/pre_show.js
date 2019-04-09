import React, { Component } from "react";
import Show from "./show";
import { Divider } from "semantic-ui-react";
class Preshow extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  render() {
    return (
      <div>
        <Divider />
        {this.state.data ? <Show data={this.props.data} /> : null}
      </div>
    );
  }
}

export default Preshow;
