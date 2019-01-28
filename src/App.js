import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Skills from './Skills';
import Footer from './Footer';
import Profile from './Profile';
import Projects from './Projects';
import resumeData from "./resumeData"
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faRocket } from '@fortawesome/free-solid-svg-icons'


const divStyle = {
  width: '80%',
  margin: '0 auto',
};

const h2Tag = {
  color: '#004de6',
};

const spaceMar = {
  marginRight: '10px',
};

const allBorder = {
  margin: '35px 35px 35px 35px',
  padding: '25px 50px 25px 50px',
};

const spaceMain = {
  margin: '20px',
};

function App() {
    
    return (
        <div style={divStyle}>

            <Header />

            <Hidden only={['md', 'lg', 'xl']}>
            <Paper style={divStyle, allBorder}>
            <Grid item xs={12}>
	               <Profile / >
	        </Grid>
	        </Paper>
	        </Hidden>

	        <Paper style={allBorder}>
            <Grid container spacing={16}>

	            <Grid item xs={12} md={9}>
	            
	            <h2 style={h2Tag}><span style={spaceMar}><FontAwesomeIcon icon={faBriefcase} /></span>Work Experience</h2>
	                <Main />
	            </Grid>
	            <Hidden only={['xs', 'sm']}>
	            <Grid item md={3}>
	               <Profile / >
	            </Grid>
	            </Hidden>
	            <Grid item xs={12} md={9}>
	            <h2 style={h2Tag}><span style={spaceMar}><FontAwesomeIcon icon={faBriefcase} /></span>Projects</h2>
	                <Projects />
	            </Grid>
            </Grid>

            <Grid container spacing={16}>
            <Grid item xs={12} md={9}>
            <h2 style={h2Tag}><span style={spaceMar}><FontAwesomeIcon icon={faRocket} /></span>Skills</h2>
            <Skills />
            </Grid>
            </Grid>

            <Grid container spacing={16}>
            <Grid item xs={12} md={9}>
            <Footer />
            </Grid>
            </Grid>
            

            
            </Paper>
        </div>
    )
}

export default App;
