import * as React from "react"
import { Switch, Route } from 'react-router-dom'
import Recipes from './Recipes'
import Home from './Home'

export default function Router() {
    return (

        <Switch>
            <Route path="/recipes">
                <Recipes/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>

    )
}