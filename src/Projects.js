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
  marginBottom: '15px',
  whiteSpace: 'pre-line',
};

function Projects() {
    const displayProjects = resumeData.projects.map((item, index) =>(
        <div key={index}>
            <span style={proName}>{item.name}</span>
            <div style={datePosition}>{item.date}</div>
            <div>{item.location}</div><br />
            <div style={lineSpace}>{item.description.join('\n\n')}</div>
            <hr />
        </div>
    ))
    return (
        <div>
            {displayProjects}
        </div>
    )
}

export default Projects