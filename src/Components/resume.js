import React, { Component } from 'react'
import { Grid, Button} from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import resume from '../Images/Resume.pdf'

const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: '#62ce56',
    },
    margin: theme.spacing.unit,
    background: '#ce5454',
    color: '#ffff'
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Resume extends Component{
  render(){
    const { classes } = this.props
    return(
      <Grid container spacing={20} justify='center'>
        <Grid item xs lg={2}>
        <Button variant="extendedFab" href={resume} className={classes.button}>
          <FontAwesomeIcon icon={faFilePdf} className={classes.extendedIcon} />
            Click to view
        </Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Resume);