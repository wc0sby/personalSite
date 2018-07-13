import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './Container/navLinkContainer'
import Footer from './Components/footer'
import AboutSection from './Container/contentAboutContainer'
import ContactSection from './Container/contentContactContainer'
import ProjectSection from './Container/contentProjectContainer'
import ResumeSection from './Container/contentResumeContainer'
import ProjectsContainer from './Container/projectsContainer'

import {
  Switch,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div >
      <CssBaseline />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutSection} />
        <Route path="/Projects" render={props=>{
          return(
            <div>
            <ProjectSection />
            <ProjectsContainer />
            </div>
          )}
        } 
        />
        <Route path="/Resume" component={ResumeSection} />
        <Route path="/Contact" component={ContactSection} />
      </Switch> 
      <Footer />
      </div>
    );
  }
}

export default App;
