import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export interface NavProps {}

export const Nav = (props: NavProps) => {
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





const StyledNav = styled(Nav)`
    li {
        margin: 1em 0
    }
`


