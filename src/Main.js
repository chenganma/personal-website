import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import resumeData from "./resumeData"
//import App from "./App"
import './App.css'

//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';

const datePosition = {
  float: 'right',
  color: '#0033cc',
  fontSize: '14px',
};

const titleRole = {
  //marginBottom: '8px',
  fontSize: '18px',
  fontWeight: 'bold',
};

const lineSpace = {
  paddingBottom: '15px',
  whiteSpace: 'pre-line',
};

function Main() {

    const displayWork = resumeData.work.map((item, index) =>(
        <div key={index}>
            <span style={titleRole}>{item.title}</span>
	          <span style={datePosition}>{item.date}</span><br />
            <div>{item.company}</div><br />
	          <div style={lineSpace}>{item.description.join('\n\n')}</div>
            <hr />
        </div>
    ))

    return (
        <div>         
            {displayWork}
        </div>
    )

}

export default Main;
