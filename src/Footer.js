import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import resumeData from "./resumeData"
import './App.css';

const marStyle = {
  float: 'right',
};

function Footer(){
	return(
		<div><br />
            <span>2019 copyright Cheng-An Ma</span> <span style={marStyle}>Last Update : {resumeData.updateDate}</span>
        </div>
	)
}

export default Footer;
