import React from 'react';
import withSession from "../withSession";
import withSession from "../withSession";

class LikeRecipe extends React.Component {

    state = {
        liked: false,
        username: ""
    }
    componentDidMount() {
        if (this.props.session.getCurrent) {
            const { username } = this.props.session.getCurrentUser;
            console.log(username);
            this.setState({ username });
        }
    }

    handleClick = likeRecipe => {
        if (this.state.liked) {
            likeRecipe().then(async({ data }) => {
                console.log(data);
                await this.props.refetch();
            });
        } else {

        }


    };

    handleLike = likeRecipe => {
        likeRecipe().then(async({ data }) => {
            console.log(data);
            await this.props.refetch();
        });
    };




    render() {
        const { username } = this.state;
        const { _id } = this.props; <
        Mutation mutation = { LIKE_RECIPE }
        variables = {
            {
                _id,
                username
            }
        } > {
            likeRecipe => (
                username && < button onClick = {
                    () => this.handleLike(likeRecipe)
                } > Like < /button>

            )
        }

        <
        /Mutation>
        return username && < button > Like < /button>;



    }
}

export default LikeRecipe;