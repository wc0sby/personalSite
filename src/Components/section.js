import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'; 

export default class SectionContent extends Component{
  render(){
    return(
      <div style={{width: '75%', marginTop: 25}}>
        <Typography variant="title" color="inherit" style={{margin: '10px 0px'}}>
          Title
        </Typography>
        <Typography color="inherit">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga minus, mollitia nesciunt, repellendus optio similique ipsa quo, accusamus non enim consequuntur. Perspiciatis optio deserunt inventore harum quisquam! Minus, temporibus voluptatibus!
        </Typography>
      </div>
    )
  }
}