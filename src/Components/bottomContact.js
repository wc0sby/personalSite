import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: '#80acf2',
    },
    margin: theme.spacing.unit,
    // background: '#ce5454',
    // color: '#ffff',
    
  },

});

class BottomContact extends Component{
  render(){
    const { classes } = this.props
    const getContactLinks = ()=>{
      return this.props.contacts.map((i, k)=>{
        return <div key={k} >
          <Button className={classes.button} href={i.link} >
            <FontAwesomeIcon icon={i.icon} />
          </Button>
        </div>
      })
    }
    return(
        getContactLinks()
    )
  }
}

export default withStyles(styles)(BottomContact);