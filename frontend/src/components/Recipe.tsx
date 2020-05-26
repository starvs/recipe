import React from 'react'
import { useParams } from 'react-router-dom'
import Ingredients from './Ingredients'
import { Recipe as IRecipe } from '../domain'
import styled from 'styled-components'
import { pink } from '../constants/colors'

export interface RecipeProps {
    recipes: IRecipe[]
    recipeId?: string
}

interface RecipeParam {
    recipeId: string
}

export default (props: RecipeProps) => {
    const { recipes } = props
    const recipeId = props.recipeId ? props.recipeId  : (useParams() as RecipeParam).recipeId
    
    if (!recipeId) {
        return null
    }
    
    const recipe = recipes.filter(r => r.id == recipeId)[0]
    console.log(recipeId)
    console.log(recipe)
    return (<div>
        <Name>{recipe.name}</Name>
        <Ingredients recipeIngredients={recipe.recipeIngredients}/>
    </div>)
}

const Name = styled.div`
    text-shadow: 3px 3px ${pink};
    font-size: 2em;
    padding: 0 0 20px 0;
`
