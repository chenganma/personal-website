import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import resumeData from "./resumeData"
//import App from "./App"
import './App.css';

const datePosition = {
  float: 'right',
  color: '#0033cc',
  fontSize: '14px',
};

const proName = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const lineSpace = {
  marginBottom: '10px',
};

function Projects(props) {
    return (
        <div>
            <span style={proName}>{props.projects.name}</span>
            <div style={datePosition}>{props.projects.date}</div><br /><br />
            <div style={lineSpace}>{props.projects.description[0]}</div>
            <div style={lineSpace}>{props.projects.description[1]}</div><br />
        </div>
    )
}

export default Projects