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


	return (
    <div>

    <h2>Who am I</h2>
      {resumeData.name}<br />
      {resumeData.role}<br />
      {resumeData.linkedin}<br />
      {resumeData.github}<br />
      {resumeData.roleDescription}<br />


    <h2 className="titleColor">Work Experience</h2>
	   <Grid container spacing={24}>
	      <Grid item xs={6}>
	        <h4>{resumeData.work[0].title}</h4>
	        {resumeData.work[0].company}<br />
	        {resumeData.work[0].date}<br />
	        {resumeData.work[0].description}<br />
	      </Grid>
	      <Grid item xs={6}>
	        <h4>{resumeData.work[1].title}</h4>
	      	{resumeData.work[1].company}<br />
	        {resumeData.work[1].date}<br />
	        {resumeData.work[1].description}<br />
	      </Grid>
	      <Grid item xs={6}>
	        <h4>{resumeData.work[2].title}</h4>
	        {resumeData.work[2].company}<br />
	        {resumeData.work[2].date}<br />
	        {resumeData.work[2].description}<br />
	      </Grid>
	   </Grid>
    </div>
    )
}

export default Main;
