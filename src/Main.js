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



function Main() {

    const displayWork = resumeData.work.map((item, index) =>
        <div key={item.title + index}>
            <h4>{item.title}</h4>
	            {item.company}<br />
	            {item.date}<br />
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
