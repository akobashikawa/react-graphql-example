import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import "./Hello.css";

class Hello extends Component {
  render() {
    console.log(this.props);

    if (!this.props.data || this.props.data.loading) {
      return <div className="Hello">Loading...</div>;
    }

    return <div className="Hello">{this.props.data.hello}</div>;
  }
}

const query = gql`
  query Hello($name: String){
    hello(name: $name)
  }
`;

export default graphql(query)(Hello);
