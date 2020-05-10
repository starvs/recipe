import * as React from "react"
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import RecipeRoutes from './Recipes'
import List from './ShoppingList'
import Home from './Home'

export default function Routes() {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route path="/recipes">
                <RecipeRoutes/>
            </Route>
            <Route path="/list">
                <List/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>

    )
}