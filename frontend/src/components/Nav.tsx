import * as React from 'react'
import { Link } from 'react-router-dom'

export interface NavProps {}

export default function(props: NavProps) {
    return (
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/recipes">Recipes</Link>
            </li>
            <li>
                <Link to="/list">List</Link>
            </li> <li>
                <Link to="/add">Add</Link>
            </li>
        </ul>
    )
}