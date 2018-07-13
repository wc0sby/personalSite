import React, { Component } from 'react'
import Card from './cards'
import Grid from '@material-ui/core/Grid'


export default class Projects extends Component{
  render(){
    const getCards=()=>{
      return this.props.project.map((i,k)=>{
        return <div> <Grid container spacing={24}  justify='space-around' alignItems='space-between'>
        <Grid item xs={1}/>
        <Grid item xs>
          <Card key={k} project={i}/>
        </Grid>
        </Grid>
        {/* <Grid item lg={1} xs={false}/> */}
        </div>

      })
    }
    return(
      <div style={{margin: '0 15%'}}>
        <Grid container spacing={24}  justify='flex-start' alignItems='center'>
        {getCards()}
        </Grid>

      </div>
    )
  }
}