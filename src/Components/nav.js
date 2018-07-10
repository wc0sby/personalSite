/*
  Component Purpose: create a nav bar that contains a left focused Name that
  also functions as a home link.  It will also include a right focused link with projec links
  and contact links
*/

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  },
};

class Nav extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar style={{justifyContent: 'space-between'}}>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
            <Toolbar style={{width: '25%', justifyContent: 'space-around'}}>
            <Typography variant="title" color="inherit">
              Links
            </Typography>
            <Typography variant="title" color="inherit">
              Links
            </Typography>
            <Typography variant="title" color="inherit">
              Links
            </Typography>
            <Typography variant="title" color="inherit">
              Links
            </Typography>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default withStyles(styles)(Nav);

