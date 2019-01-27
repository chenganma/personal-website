import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Skills from './Skills';
import Footer from './Footer';
import Profile from './Profile';
import resumeData from "./resumeData"
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faRocket } from '@fortawesome/free-solid-svg-icons'


const divStyle = {
  width: '85%',
  margin: '0 auto',
};

const h2Tag = {
  color: '#0000A0',
};

const spaceMar = {
  marginRight: '10px',
};

function App() {
    
    return (
        <div style={divStyle}>

            <Header />

            <Hidden only={['md', 'lg', 'xl']}>
            <Grid item xs={12}>
	               <Profile / >
	        </Grid>
	        </Hidden>

            <Grid container spacing={16}>

	            <Grid item xs={12} md={9}>
	            
	            <h2 style={h2Tag}><span style={spaceMar}><FontAwesomeIcon icon={faBriefcase} />Work Experience</span></h2>
	                <Main />
	            </Grid>
	            <Hidden only={['xs', 'sm']}>
	            <Grid item md={3}>
	               <Profile / >
	            </Grid>
	            </Hidden>
            </Grid>

            <h2 style={h2Tag}><span style={spaceMar}><FontAwesomeIcon icon={faRocket} /></span>Skills</h2>
            <Skills />

            <Footer />
        </div>
    )
}

export default App;
