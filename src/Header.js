import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const logoSize = {
  width: '55px',
  paddingTop: '30px',
};

function Header(){
	return(
		<div>
		    <img style={logoSize} src="https://chenganma.com/favicon.ico"></img>
        </div>
	)
}

export default Header;
