import React, { Component } from 'react'
import Card from './cards'
import Grid from '@material-ui/core/Grid'

export default class Projects extends Component{
  render(){
    const getCards=()=>{
      return this.props.project.map((i,k)=>{
        return <Card key={k} project={i}/>
      })
    }
    return(
      <div style={{margin: '0 15%'}}>
        <Grid container spacing={24} justify='center' alignItems='stretch'>
          {getCards()}
        </Grid>
      </div>
    )
  }
}