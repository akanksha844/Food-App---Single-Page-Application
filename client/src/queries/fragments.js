import { gql } from 'apollo-boost';
export const recipeFragments = {
    recipe: gql `
    fragment CompleteRecipe on Recipe {
        _id
        name
        category
        description
        insructions
        createdDate
        likes
        username

    }`,
    like: gql `
    fragment LikeRecipe on Recipe {
        _id
        likes
    }`
};