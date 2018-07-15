/*
This component will hold all content pertaining to the main secion of the page
Future state of this component will house other components relative to the main
section (i.e sections, article, bios...)
*/
import React, { Component } from 'react';
import Header from './header'
import Section from '../Components/section'
import Contact from '../Container/contactContainer'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'


export default class Main extends Component{
  render(){
    const { content } = this.props
    return (
    <main style={{paddingTop: 50, flexGrow: 1, position: 'relative', minHeight: '100%'}}>
      <Header content= { content } />

      <Grid container spacing={24} justify='center' alignItems='stretch'>
        {/* Placeholder */}
        {/* Content */}
        <Grid item lg={7} sm={12} >
          <Section content={ content } />
        </Grid>
        {/* Contact */}
        <Hidden mdDown>
        <Grid item lg={2} md={1} xs={false}>
          <Contact />
        </Grid>
        </Hidden>
      </Grid>

    </main>
    )
  }
}