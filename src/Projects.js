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

function Projects() {

    const displayProjects = resumeData.projects.map((item, index) =>
        <div key={item.name + index}>
            <span style={proName}>{item.name}</span>
	          <span style={datePosition}>{item.date}</span><br />
            <div></div><br />
	          {item.description}<br /><hr />
        </div>
    )

    return (
        <div>         
            {displayProjects}
        </div>
    )

}

export default Projects;