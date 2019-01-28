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

const titleColor = {
  color: 'blue',
};

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

function Main() {

    const displayWork = resumeData.work.map((item, index) =>
        <div key={item.title + index}>
            <span style={titleRole}>{item.title}</span>
	           <span style={datePosition}>{item.date}</span><br />
             <div>{item.company}</div><br />
	          {item.description}<br /> <hr />
        </div>
    )

    return (
        <div>         
            {displayWork}
        </div>
    )

}

export default Main;
