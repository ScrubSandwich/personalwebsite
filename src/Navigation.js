import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="nav-bar" flex>
        <ul >
          <li>Home</li>
          <li>About</li>
          <li>Expirience</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Navigation