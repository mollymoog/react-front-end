  
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="light-green darken-3">
        <div className="container">
          <NavLink to="/codepix" className="center brand-logo">Home</NavLink>
          <ul className="right">
            <li><NavLink to="/game">New Game</NavLink></li>
          </ul>
          <ul className="left">
            <li><NavLink to="/instructions">Instructions</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar