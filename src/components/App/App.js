import React, { Component } from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{ this.props.data.helloworld }!</h1>
        </header>
      </div>
    );
  }
}

const query = gql`
  query {
    helloworld
  }
`;

export default graphql(query)(App);
