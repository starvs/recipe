import React, { useState, useEffect } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import { Recipe } from '../domain'

export interface RecipesProps {
    recipes: Recipe[]
}

export const Recipes = (props: RecipesProps) => {
    const { recipes } = props
    if (!recipes) {
        return <h1>loading...</h1>
    }
    const recipeList = recipes.map((recipe: Recipe) => {
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
                <h1>this is where a recipe will go</h1>
            </Route>
            <Route path={match.path}>
                <Recipes recipes={recipes}/>
            </Route>
        </Switch>
    )
}

export default RecipeRoutes