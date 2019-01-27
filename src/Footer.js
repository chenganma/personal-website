import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import resumeData from "./resumeData"
import github_logo from './assets/GitHub.png';
import linkedin_logo from './assets/linkedin.png';
import './App.css';

const marStyle = {
  float: 'right',
};

const divStyle = {
  marginTop: '15px',
};

function Footer(){
	return(
		<div style={divStyle}>
            <span>2019 copyright Cheng-An Ma</span> <span style={marStyle}>Last Update : {resumeData.updateDate}</span>
        </div>
	)
}

export default Footer;
