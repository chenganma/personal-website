import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Skills from './Skills';
import Footer from './Footer';
import resumeData from "./resumeData"
import Grid from '@material-ui/core/Grid';

const divStyle = {
  width: '85%',
  margin: '0 auto',
};

function App() {
    
    return (
        <div style={divStyle}>
            <Header />

            

            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Main />
              </Grid>
              <Grid item xs={6}>
                
              </Grid>
            </Grid>

            <Skills />

            <Footer />
        </div>
    )
}

export default App;
