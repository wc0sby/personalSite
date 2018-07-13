import React, { Component } from 'react'
import Avatar from './avatar'

export default class Header extends Component{

  getTitle = obj => obj ? obj[0].link : ''
  
  getHeadline = obj => obj ? obj[0].headline : ''

  renderAvatar = obj => obj 
    ? <Avatar content={obj[0].image}/> 
    : ''

  render(){
    const { content } = this.props
    return(
      <div className="App">
      <header className="App-header">
      {/* Need to accept an image */}
      {this.renderAvatar(content)}
        {/* <Avatar content={content}/> */}
        <h1 className="App-title">{ this.getTitle(content) }</h1>
        <h2 className="App-title">{ this.getHeadline(content) }</h2>
      </header>
      </div>
    )
  }
}