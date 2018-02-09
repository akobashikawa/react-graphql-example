import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
/*
import { HttpLink } from "apollo-link-http";
//*/
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";

import { typeDefs } from "./schema";
import { mocks } from "./mocks";

import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

/*
// https://www.apollographql.com/docs/react/basics/setup.html
const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    link: new HttpLink(),
    cache: new InMemoryCache()
});
//*/

///*
// https://dev-blog.apollodata.com/full-stack-react-graphql-tutorial-582ac8d24e3b
const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache()
});
//*/

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
