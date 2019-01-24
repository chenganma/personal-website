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

    const displayTurtles = resumeData.work.map((turtle, index) =>
        <div key={turtle.title + index}>
            <h1>{turtle.title} ({turtle.company})</h1>
            <hr/>
        </div>
    )

    return (
        <div>
            {displayTurtles}
        </div>
    )




}

export default Main;
