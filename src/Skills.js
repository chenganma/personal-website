import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import resumeData from "./resumeData"
//import App from "./App"
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const divStyle = {
  width: '50%',
  margin: '0 auto',
};

const backColor = {
  backgroundColor: "yellow",
};

function Skills() {

    const displaySkills = resumeData.skills.map((item, index) =>
        
            <span style={backColor}>{item}{'   '}</span>

    )

    return (
        <div style={divStyle}>
            {displaySkills}
        </div>
    )

}

export default Skills;
