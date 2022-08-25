import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_USER_RECIPES } from '../../queries';

const UserRecipes = ({ username }) => ( <
    Query query = { GET_USER_RECIPES }
    variables = {
        {
            username
        }
    } > {
        ({ data, loading, }) => {
            if (loading) return <div > Loading < /div>
            if (error) return <div > Error < /div>
            console.log(data);


            return ( <
                h3 > your recipes < /h3> {
                    data.getUserRecipes.map(recipe => ( <
                        li >
                        <
                        p > { recipe.name } <
                        /p> <
                        p > { recipe.likes } < /p> <
                        /li>
                    ))
                }

            )

        }
    }

    <
    /Query>
);


export default UserRecipes;