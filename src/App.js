import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import Home from './components/Home'
import AvengersList from './components/AvengersList'
import AvengerPage from './components/AvengerPage'

import avengers from './data'

import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      avengers: avengers
    }
  }
  
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink>
          </li>
          <li>
            <NavLink to="/avengers" activeClassName="activeNavButton">Avengers</NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route 
          exact 
          path="/avengers" 
          render={props => <AvengersList {...props} avengers={this.state.avengers} />} 
        />
        <Route 
          path="/avengers/:id" 
          render={props => <AvengerPage {...props} avengers={this.state.avengers} />} 
        />
      </div>
    )
  }
}

