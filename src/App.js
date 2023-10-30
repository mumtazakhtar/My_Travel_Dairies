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
      <h1 className="cards-heading">Popular Destinations in the Netherlands</h1>
      <div className='cards'>
        <Card image = "card1 (1).jpg" name = "Amsterdam" />
        <Card image = "card1 (2).jpg" name = "Rotterdam"/>
        <Card image = "card1 (1).jpg" name = "Delft" />
        <Card image = "card1 (2).jpg" name = "The Hague"/>
        <Card image = "card1 (1).jpg" name = "Maastricht" />
        <Card image = "card1 (1).jpg" name = "Utrecht" />
        <Card image = "card1 (1).jpg" name = "Geithoorn" />
        <Card image = "card1 (1).jpg" name = "Leiden" />
        <Card image = "card1 (1).jpg" name = "Breda" />
      </div>
    </div>
  );
}

export default App;
