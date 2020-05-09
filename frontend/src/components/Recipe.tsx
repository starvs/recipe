import React from 'react'
import { useParams } from 'react-router-dom'
import Ingredients from './Ingredients'
import { Recipe as IRecipe } from '../domain'


export interface RecipeProps {
    recipes: IRecipe[]
}

interface RecipeParam {
    recipeId: string
}

export default (props: RecipeProps) => {
    const { recipes } = props
    const recipeId = (useParams() as RecipeParam).recipeId
    const recipe = recipes.filter(r => r.id == recipeId)[0]
    
    return (<>
        <div>Name: {recipe.name}</div>
        <Ingredients ingredients={recipe.ingredients}/>
    </>)
}

