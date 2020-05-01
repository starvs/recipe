
import * as React from "react"
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav'

export interface AppProps {}

export default function App (props: AppProps) {
  return ( 
    <BrowserRouter>
        <Nav />
        <Router />
    </BrowserRouter>
  )
}