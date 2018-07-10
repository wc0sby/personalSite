/*
This component will hold all content pertaining to the main secion of the page
Future state of this component will house other components relative to the main
section (i.e sections, article, bios...)
*/
import React, { Component } from 'react';
import Header from './header'
import Section from './section'
import Contact from './contactBar'
import Grid from '@material-ui/core/Grid';
import { height } from 'window-size';

export default class Main extends Component{
  render(){
    return (
    <main style={{paddingTop: 50, flexGrow: 1}}>
      <Header />
      <div style={{minHeight: 500}}>
      <Grid container spacing={24} justify='center' alighnItems='center'>
        {/* Placeholder */}
        <Grid item xs={2}/>
        {/* Content */}
        <Grid item xs={5}>
          <Section />
        </Grid>
        {/* Contact */}
        <Grid item lg={1} xs={0}>
          <Contact />
        </Grid>
      </Grid>
      </div>
    </main>
    )
  }
}