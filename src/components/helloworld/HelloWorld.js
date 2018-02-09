import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import './HelloWorld.css';

class HelloWorld extends Component {
  render() {
    console.log(this.props);

    if (!this.props.data || this.props.data.loading) {
      return <div className="HelloWorld">Loading...</div>;
    }

    return (
      <div className="HelloWorld">
        { this.props.data.helloworld }
      </div>
    );
  }
}

const query = gql`
  query {
    helloworld
  }
`;

export default graphql(query)(HelloWorld);
