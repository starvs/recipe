import * as React from 'react'
import { Link } from 'react-router-dom'

export interface NavProps {}

export default function(props: NavProps) {
    return (
        <ul>
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Recipes">Recipes</Link>
            </li>
        </ul>
    )
}