import React, { useState, useEffect } from 'react'
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom'
import { Recipe as IRecipe } from '../domain'
import Recipe from './Recipe'
import styled from 'styled-components'

export interface RecipesProps {
    recipes: IRecipe[]
    className?: string
}

export const Recipes = (props: RecipesProps) => {
    const { recipes, className } = props
    const [recipeId, setRecipeId] = useState<string>(null)
    
    if (!recipes) {
        return <h1>loading...</h1>
    }
    console.log(recipes)
    const recipeList = recipes.map((recipe: IRecipe) => {
        console.log(recipe.name)
        return <div onClick={() => setRecipeId(recipe.id)}>{recipe.name}</div>
    })

    return (
        <div className={className}>
            <LeftColumn>{recipeList}</LeftColumn>
            <RightColumn><Recipe recipes={recipes} recipeId={recipeId}/></RightColumn>
        </div>
        
    )
}

export const RecipeRoutes = () => {
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:7000/recipes")
            setRecipes(await result.json())
        }

        fetchData()
    }, [])
    
    const match = useRouteMatch()
    return (
        <Switch>
            <Route path={`${match.path}/:recipeId`}>
                <Recipe recipes={recipes}/>
            </Route>
            <Route path={match.path}>
                <StyledRecipes recipes={recipes}/>
            </Route>
        </Switch>
    )
}

export default RecipeRoutes

const LeftColumn = styled.span`
    grid-column-start: 1;
    grid-column-end: 2;
`

const RightColumn = styled.span`
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: end;
`

const StyledRecipes = styled(Recipes)`
    display: grid; 
    grid-template-columns: 50% 50%;
`

const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-decoration: none;
    font-family: Verdana;
    font-size: 1 em;
    &:hover {
        text-shadow:  2px 2px pink;
    }
`