import React from 'react';
import ReactDOM from 'raect-dom';
import './index.css';
import App from './App';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
const client = new ApolloClient({
    uri: "https://localhost:4444/graphql",
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token
            }
        })
    },
    onError: ({ networkError }) => {
        if (networkError) {
            console.log('Network Error', networkError);


        }
    }
});


ReactDOM.render( <
    ApolloProvider client = { client } >
    <
    App / >
    <
    /ApolloProvider >, document.getElementById('root'));