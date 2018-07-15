import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'; 

export default class SectionContent extends Component{

  getTitle = obj => obj ? obj[0].title : ''

  getContent = obj => obj 
    ? obj[0].description.map((i,k)=><Typography key={k} style={{margin: '10px 0'}}>{i}</Typography>)
    : ''
  

  render(){
    const { content } = this.props
    return(
      <div style={{width: '90%', margin: '30px 20px'}}>
        <Typography variant="title" color="inherit" style={{margin: '10px 0px'}}>
          {this.getTitle(content)}
        </Typography>
          {this.getContent(content)}
      </div>
    )
  }
}