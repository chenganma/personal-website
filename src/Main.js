import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import resumeData from "./resumeData"
//import App from "./App"
import './App.css';

function Main() {


	return (
    <div>
    <h2>Who am I</h2>
    {resumeData.name}<br />
    {resumeData.role}<br />
    {resumeData.linkedinId}<br />
    {resumeData.skypeid}<br />
    {resumeData.roleDescription}<br />


    <h2>Work Experience</h2>      
      <table>
      <tr><td>{resumeData.work[0].title}</td></tr>
      <tr><td>{resumeData.work[0].company}</td></tr>
      <tr><td>{resumeData.work[0].date}</td></tr>
      <tr><td>{resumeData.work[0].description}</td></tr>
      </table>
      <br />
      <table>
      <tr><td>{resumeData.work[1].title}</td></tr>
      <tr><td>{resumeData.work[1].company}</td></tr>
      <tr><td>{resumeData.work[1].date}</td></tr>
      <tr><td>{resumeData.work[1].description}</td></tr>
      </table>
      <br />
      <table>
      <tr><td>{resumeData.work[2].title}</td></tr>
      <tr><td>{resumeData.work[2].company}</td></tr>
      <tr><td>{resumeData.work[2].date}</td></tr>
      <tr><td>{resumeData.work[2].description}</td></tr>
      </table>
    </div>
    )
}

export default Main;
