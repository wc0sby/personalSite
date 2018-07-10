import React, { Component } from 'react'
import logo from '../logo.svg';

export default class Header extends Component{
  render(){
    return(
      <div>
      <header className="App-header">
      {/* Need to accept an image */}
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Wade Cosby</h1>
        <h2 className="App-title">Full Stack Developer</h2>
      </header>
      </div>
    )
  }
}