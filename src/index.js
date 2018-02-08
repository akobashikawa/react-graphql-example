import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { mockNetworkInterface } from "react-apollo/test-utils";

import './index.css';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';

/*
// https://www.apollographql.com/docs/react/basics/setup.html
const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    link: new HttpLink(),
    cache: new InMemoryCache()
});
*/

// https://medium.com/@carlos_42328/mocking-api-responses-with-react-apollo-11eb4610debe
const networkInterface = mockNetworkInterface(...mocks);
const client = new ApolloClient({
  networkInterface,
  addTypename: false
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
