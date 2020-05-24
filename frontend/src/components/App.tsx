
import * as React from "react"
import Router from './Routes'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav'
import styled from 'styled-components'

export interface AppProps {}

export default function App (props: AppProps) {
  return ( 
    <StyledBody>
      <BrowserRouter>
          <Nav />
          <StyledMain>
            <Router />
          </StyledMain>
      </BrowserRouter>
    </StyledBody>
  )
}

const StyledMain = styled.div`
    padding: 2em 0 0 2em;
    font-size: 2em;
    font-family: Arial;
`

const StyledBody = styled.div`
  background-color: red;
  height: 100vh;
`