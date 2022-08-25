import React from 'react';
import { withRouter } from 'react-router-dom'
import { ApolloConsumer } from "react-apollo";

const handleSignout = (client, history) => {
    localStorage.setItem('token', '');
    client.resetStore();
    history.push('/');

};


import { ApolloComsumer } from 'react-apollo';

const Signout = ({ history }) => ( <
    ApolloConsumer > {
        client => {

            return <button onClick {
                    () => handleSignout(client, history) } >
                Signout < /button>;
        }
    }

    <
    /ApolloConsumer>

);

export default withRouter(signout);