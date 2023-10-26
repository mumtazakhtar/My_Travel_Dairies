import React from 'react';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Card from './components/Card.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <div className='cards'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
