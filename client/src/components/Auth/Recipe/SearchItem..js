import React from 'react';
import Recipe from '../../../../../models/Recipe';
import { GET_ALL_RECIPES } from '../../../queries';
import SearchItem from './';



const SearchItem = () => ( <
    li key = { Recipe._id } >
    <
    Link to = { `/recipes/${recipe._id}` } >
    <
    h4 > { recipe.name } < /h4> <
    /Link> <
    p > Likes: { recipe.likes } < /p> <
    /li>
)

export default SearchItem;