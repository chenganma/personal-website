//import React, { Component } from 'react';
import React from "react"
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Skills from './Skills';
import Footer from './Footer';
import Profile from './Profile';
import Projects from './Projects';
import resumeData from "./resumeData"
//import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faRocket } from '@fortawesome/free-solid-svg-icons'


const divStyle = {
  width: '80%',
  margin: '0 auto',
  paddingTop: '2em',
};

const h2Tag = {
  color: '#004de6',
};

const spaceMar = {
  marginRight: '10px',
};



const contentCenter = {
  textAlign: 'center',
  margin: '35px',
  padding: '35px',
};

const workExperienceStyle = {
  backgroundColor: '#e3f2fd',
  padding: '25px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  marginTop: '2em',
};

const projectsStyle = {
  backgroundColor: '#f3e5f5',
  padding: '25px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const skillsStyle = {
  backgroundColor: '#e8f5e9',
  padding: '25px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

function App() {

	const displayProjects = resumeData.projects.map(item01 =>
        <Projects key={item01.name} projects={item01} />
    )

    const displaySkills = resumeData.skills.map(item02 =>
       <Skills key={item02.toString()} skills={item02} />
    )
    
    return (
        <div style={divStyle}>

            <Header />

            <Hidden only={['md', 'lg', 'xl']}>
            <Paper style={{divStyle}}>
            <Grid item xs={12} style={contentCenter}>
	               <Profile / >
	        </Grid>
	        </Paper>
	        </Hidden>

	        <Paper elevation={0}>
            <Grid container spacing={8}>

                <Grid item xs={12} md={9} style={workExperienceStyle}>
                <h2 style={h2Tag}><span style={spaceMar}><FontAwesomeIcon icon={faBriefcase} /></span>Work Experience</h2>
                    <Main />
                </Grid>
                <Hidden only={['xs', 'sm']}>
                <Grid item md={3}>
                   <Profile / >
                </Grid>
                </Hidden>
                
                <Grid item xs={12} md={9} style={projectsStyle}>
                <h2 style={h2Tag}><span style={spaceMar}><FontAwesomeIcon icon={faBriefcase} /></span>Projects</h2>
                    {displayProjects}
                </Grid>
                
                <Grid item xs={12} md={9} style={skillsStyle}>
                <h2 style={h2Tag}><span style={spaceMar}><FontAwesomeIcon icon={faRocket} /></span>Skills</h2>
                {displaySkills}
                </Grid>
                
            </Grid>

            <Grid container spacing={8}>
            <Grid item xs={12} md={9}>
            <Footer />
            </Grid>
            </Grid>
            </Paper>
        </div>
    )
}

export default App;
