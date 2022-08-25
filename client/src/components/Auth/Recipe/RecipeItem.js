import React from 'react';
import { Link } from 'react-router-dom';


const RecipeItem = ({ _id, name, category }) => ({ name, category }) => (


    <
    li >
    <
    Link to = { `/recipes/${_id}` } >
    <
    h4 > { name } < /h4> <
    /Link> <
    h4 > { name } < /h4> <
    p > { category } < /p> { name } <
    /li>


);

export default RecipeItem;