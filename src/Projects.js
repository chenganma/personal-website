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
<<<<<<< HEAD
            {displayProjects}
=======
            <span style={proName}>{props.projects.name}</span>
            <div style={datePosition}>{props.projects.date}</div><br /><br />
            <div style={lineSpace}>{props.projects.description.join('\n\n')}</div>
            <hr />
>>>>>>> 9d1f0d86665a5a3c2748250cba16950b70507789
        </div>
    )
}

export default Projects