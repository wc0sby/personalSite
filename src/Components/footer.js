import React, { Component } from 'react'
import Contact from '../Container/contactBottomContainer'
import { Grid } from '@material-ui/core'

export default class Footer extends Component{
  render(){
    const styles = {
      footer:{
        position: 'absolute',
        bottom: 0,
        height: 50,
        margin: 20,
        width: '98%'
      },
      container:{
        display: 'flex',
        justifyContent: 'space-between'
      },
      contact:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '10%',
        fontSize: 20,
        marginRight: '10%'
      }
    }
    return(
      <div style={styles.footer}>
        <hr />
        {/* Container */}
        <Grid container justify='center' >
        <div style={styles.container}>
          {/* section 1 */}
          <div>
            
          </div>
          {/* section 2 */}
          <Grid item xs style={styles.contact}>
            <Contact />
          </Grid>
        </div>
        </Grid>
      </div>
    )
  }
}