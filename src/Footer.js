import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import resumeData from "./resumeData"
import github_logo from './assets/GitHub.png';
import linkedin_logo from './assets/linkedin.png';
import './App.css';

const divStyle = {
  width: '50%',
  margin: '0 auto',
};

function Footer(){
	return(
		<div style={divStyle}>
            <p>2019 copyright Cheng-An Ma</p>
            <a href={resumeData.linkedin.url}><img src={linkedin_logo}></img></a>
            <a href={resumeData.github.url}><img src={github_logo}></img></a>
        </div>
	)
}

export default Footer;
