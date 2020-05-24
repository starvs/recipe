import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
    padding-inline-start: 0px;
    display: flex;
    list-style: none;
    text-decoration: none;
    background-color: white;
    margin-block-end: 0;
    margin-block-start: 0;
`

const StyledLink = styled(Link)<LinkProps>`
    text-decoration: none;
    color: ${props => props.active ? 'pink' : 'black'};
    font-family: Verdana;
    font-size: 3em;
    &:hover {
        text-shadow: ${props => props.active ? '2px 2px black' : '2px 2px pink'};
    }
`

export default Nav


