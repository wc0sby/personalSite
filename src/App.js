import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './Components/nav'
import Main from './Components/main'
import Footer from './Components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <CssBaseline />
      <Nav />
      <Main />
      <Footer />
      </div>
    );
  }
}

export default App;
