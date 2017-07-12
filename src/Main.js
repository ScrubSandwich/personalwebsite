import React, { Component } from 'react'
import './Main.css'

import Navigation from './Navigation'
import Home from './Home'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <Home />
      </div>
    )
  }
}

export default Main