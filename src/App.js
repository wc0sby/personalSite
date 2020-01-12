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
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Resume from './Components/resume';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{minHeight:'100%', position:'relative'}}>
        <div style={{paddingBottom:'70px', height: '100%'}}>
        <CssBaseline />
        <Nav />
          <div>
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
          <Route path="/Resume" render={props=>{
            return(
              <div>
              <ResumeSection />
              <Resume />
              </div>
            )}
          } 
          />
          {/* <Route path="/Resume" component={ResumeSection} /> */}
          <Route path="/Contact" component={ContactSection} />
        </Switch> 
        </div>
        </div>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
