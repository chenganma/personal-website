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
    
    return (
        <div>
            <Header />

            <Main />
            
            <Footer />
        </div>
    )
}

export default App;
