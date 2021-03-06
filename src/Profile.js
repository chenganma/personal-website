import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import resumeData from "./resumeData"
//import App from "./App"
import './App.css';

//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';

import github_logo from './assets/GitHub.png';
import linkedin_logo from './assets/linkedin.png';
import logo from './assets/logo.jpg';

const logoSize = {
  width: '150px',
  paddingTop: '5px',
};

const iconSize = {
  marginRight: '12px',
};

const nameFormat = {
  fontSize: '22px',
  fontWeight: 'bold',
}

function Profile() {

    return (
        <div>
        	<img style={logoSize} src={logo} alt="Logo"></img>
            <div style={nameFormat}>{resumeData.name}</div>
            <p>{resumeData.role}</p>
            <p>{resumeData.roleDescription}</p>
            <a href={resumeData.profolio.url}>{resumeData.profolio.url}</a><br /><br />
            <a href={resumeData.linkedin.url} style={iconSize}><img src={linkedin_logo} alt="Linkedin Logo"></img></a>
            <a href={resumeData.github.url}><img src={github_logo} alt="GitHub Logo"></img></a>
        </div>
    )

}

export default Profile;
