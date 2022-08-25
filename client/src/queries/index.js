 import { gql } from 'apollo-boost';
 /* Recipes queries  */
 export const GET_ALL_RECIPES = gql `
 query{
    getAllRecipes{
        name
        description
        instructions
        category
        likes
        createdDate
    }
 }
 `;

 /* Recipes Mutation    */



 /* user queries    */
 export const GET_CURRENT_USER = gql `
 query{
    getCurrentUser{
        username
        joinDate
        email
    }
 }`;


 /* user mutations   */
 export const SIGNIN_USER = gql ``;


 export const SIGNUP_USER = gpl `

 mutation($username:String!, $email : String!, $password: String!){
    signupUser(username: $username, email: $email, password: $password){
        token
    }
 }
 
 `;