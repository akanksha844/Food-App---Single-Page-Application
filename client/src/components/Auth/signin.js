import React from 'raect';
import { withRouter } from 'react-router-dom';
import { Mutation } from "react-apollo";
import Error from "../Error";
import { SIGNIN_USER } from "../../queries";
const initialState = {
    username: "",
    password: "",
}
class Signin extends React.Component {
    render() {
        return ( <
            div > Signin < /div>
        )
    }
}

export default withRouter(signin);