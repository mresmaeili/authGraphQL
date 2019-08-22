import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';

//allow graphql to send cookies to server
const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
