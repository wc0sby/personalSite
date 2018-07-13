import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class contactBar extends Component{
  render(){
    const styles={
     textAlign: 'center',
      margin: '25px 0px',
      width: '90%'
    }
    // console.log(this.props.contacts)
    return(
      <div style={styles} >
        <Typography variant='title' style={{margin: '10px 0px'}}>
          Contact
        </Typography>
        <Grid container spacing={0} justify='center'>
          <Grid item xs >
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