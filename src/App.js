import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import AvengersList from './components/AvengersList'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/avengers" component={AvengersList} />
      </div>
    )
  }
}

