/*
  Component Purpose: create a nav bar that contains a left focused Name that
  also functions as a home link.  It will also include a right focused link with projec links
  and contact links
*/

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const renderLinks = (arr, style)=> arr.filter(i=> i !== 'Wade Cosby').map((i, k)=>{
  return  <Link to={`/${i}`} key={k} style={{textDecoration: 'none', color: 'inherit'}}> { 
  <Button className={style} color="inherit">
    {i}
  </Button>}
  </Link>
})

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
    // width: '100%',
  },
});

class Nav extends Component {
  render(){
    const { classes, content } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar style={{justifyContent: 'space-between'}}>
            <Link to="/" style={{textDecoration: 'none'}}>
              <Button className={classes.buttton} >
                {content[0]}
              </Button>
            </Link>
            <Toolbar style={{width: '20%', justifyContent: 'space-around'}}>
              {renderLinks(content, classes.button)}
            </Toolbar>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default withStyles(styles)(Nav);

