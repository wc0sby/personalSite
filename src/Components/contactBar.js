import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class contactBar extends Component{
  render(){
    const styles={
      display: 'flex',
      width: '25%'
    }
    return(
      <div >
        <Typography variant='title'>
          Contact
        </Typography>
        <Grid container spacing={0} justify='center'>
          <Grid item xs>
          <FontAwesomeIcon icon={faLinkedin} />
          </Grid>
          <Grid item xs>
          LinkedIn
          </Grid>
        </Grid>
      </div>
    )
  }
}