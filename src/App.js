import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import resumeData from "./resumeData"

const divStyle = {
  width: '85%',
  margin: '0 auto',
};

function App() {

	//const resumeData = this.props.resumeData;
	//console.log(resumeData)
	console.log(resumeData)
  	//const mainComponents = resumeData.map(info => <Main name={this.name} role={this.role} />)
  	
  	//console.log(resumeData.work[0].company)
    return (
    	<div style={divStyle}>
      	    <Header />
      		
      		<Main />

      		<Footer />
       </div>
    )
  
}

export default App;
