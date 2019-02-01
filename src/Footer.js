import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';
import resumeData from "./resumeData"
import './App.css';

function Footer(){
	return(
		<div><br />
		 <Grid item xs={12} md={6}>
            <span>2019 copyright Cheng-An Ma</span>
         </Grid>
         <Grid item xs={12} md={6}>
            <span >Last Update : {resumeData.updateDate}</span>
         </Grid>
        </div>
	)
}

export default Footer;
