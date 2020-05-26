import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { pink, seafoam } from '../constants/colors'

export interface NavProps {}

export const Nav = (props: NavProps) => {
    const [active, setActive] = useState<string>(null)

    return (
        <div>
            <Ul>
                <Li>
                    <StyledLink to="/home" onClick={() => setActive('home')} active={active==='home'}>Home</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/recipes" onClick={() => setActive('recipes')} active={active==='recipes'}>Recipes</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/list" onClick={() => setActive('list')} active={active==='list'}>List</StyledLink>
                </Li> 
                <Li>
                    <StyledLink to="/add" onClick={() => setActive('add')} active={active==='add'}>Add</StyledLink>
                </Li>
            </Ul>
        </div>
    )
}

interface LinkProps {
    active: boolean
}


const Li = styled.li`
    margin: 0 1em;
    padding: 1em 0;
`

const Ul = styled.ul`
    display: flex;
    list-style: none;
    text-decoration: none;
    background-color: white;
    padding: 50px 0 20px 0;
    margin-block-end: 0;
    margin-block-start: 0;
`

const StyledLink = styled(Link)<LinkProps>`
    text-decoration: none;
    color: ${props => props.active ? `${pink}` : `${seafoam}`};
    text-shadow: ${props => props.active ? '3px 3px seamfoam' : null};
    font-family: Verdana;
    font-size: 3em;
    &:hover {
        text-shadow: ${props => props.active ? `3px 3px ${seafoam}` : `3px 3px ${pink}`}
    }
`

export default Nav


