import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'; 

export default class SectionContent extends Component{

  getTitle = obj => obj ? obj[0].title : ''

  getContent = obj => obj ? obj[0].description : ''

  render(){
    const { content } = this.props
    return(
      <div style={{width: '75%', marginTop: 25}}>
        <Typography variant="title" color="inherit" style={{margin: '10px 0px'}}>
          {this.getTitle(content)}
        </Typography>
        <Typography color="inherit">
          {this.getContent(content)}
        </Typography>
      </div>
    )
  }
}