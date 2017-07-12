import React, { Component } from 'react'
import './Home.css'
import me from './me.jpg'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={me} alt='me' flex/>
        <h3>Student</h3>
      </div>
    )
  }
}

export default Home