import React, { Component } from 'react'
import logo from '../logo.svg';
import Avatar from './avatar'

export default class Header extends Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
      {/* Need to accept an image */}
        <Avatar />
        <h1 className="App-title">Wade Cosby</h1>
        <h2 className="App-title">Full Stack Developer</h2>
      </header>
      </div>
    )
  }
}