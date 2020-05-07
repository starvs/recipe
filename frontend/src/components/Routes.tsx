import * as React from "react"
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import RecipeRoutes from './Recipes'
import Home from './Home'

export default function Routes() {
    const match = useRouteMatch()
    console.log(match)
    return (
        <Switch>
            <Route path="/recipes">
                <RecipeRoutes/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>

    )
}