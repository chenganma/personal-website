import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import resumeData from "./resumeData"
//import App from "./App"
import './App.css';

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const divStyle = {
  margin: '0 auto',
};

const spaceMar = {
  margin: "10px",
};

function Skills() {

    const displaySkills = resumeData.skills.map((item, index) =>
      <Button key={item.toString()} variant="outlined" color="primary" style={spaceMar}>
        {item}
      </Button>
    )

    return (
        <div style={divStyle}>
            {displaySkills}
        </div>
    )

}

export default Skills;
