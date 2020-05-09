import React, { useState, useEffect } from 'react'
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom'
import { Recipe as IRecipe } from '../domain'
import Recipe from './Recipe'

export interface RecipesProps {
    recipes: IRecipe[]
}

export const Recipes = (props: RecipesProps) => {
    const { recipes } = props
    if (!recipes) {
        return <h1>loading...</h1>
    }
    const recipeList = recipes.map((recipe: IRecipe) => {
        return <div><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></div>
    })

    return (<>{recipeList}</>)
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
                <Recipes recipes={recipes}/>
            </Route>
        </Switch>
    )
}

export default RecipeRoutes