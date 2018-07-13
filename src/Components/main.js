/*
This component will hold all content pertaining to the main secion of the page
Future state of this component will house other components relative to the main
section (i.e sections, article, bios...)
*/
import React, { Component } from 'react';
import Header from './header'
// import AboutSection from '../Container/contentAboutContainer'
import Section from '../Components/section'
import Contact from '../Container/contactContainer'
import Grid from '@material-ui/core/Grid';


export default class Main extends Component{
  render(){
    const { content } = this.props
    return (
    <main style={{paddingTop: 50, flexGrow: 1}}>
      <Header content= { content } />
      <div style={{minHeight: 250}}>
      <Grid container spacing={24} justify='center' alignItems='center'>
        {/* Placeholder */}
        <Grid item xs={2}/>
        {/* Content */}
        <Grid item xs={6}>
        {/* Routing on components based on clicks from nav bar */}
          <Section content={ content } />
        </Grid>
        {/* Contact */}
        <Grid item lg={1} xs={false}>
          <Contact />
        </Grid>
      </Grid>
      </div>
    </main>
    )
  }
}