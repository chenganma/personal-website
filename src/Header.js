import React from "react"
//import ReactDOM from "react-dom"
//import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './assets/logo.jpg';
import './App.css';

const logoSize = {
  width: '55px',
  paddingTop: '22px',
};

function Header(){
	return(
		<div>
		    <img style={logoSize} src={logo}></img>
        </div>
	)
}

export default Header;
