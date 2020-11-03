import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>  
 
      <App />
  </ApolloProvider>,
  document.getElementById('root'),
);