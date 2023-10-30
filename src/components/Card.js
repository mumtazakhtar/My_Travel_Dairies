import React from 'react';
import '../App.css'

export default function Card (props) {
  return (
    <div className='card'>
      <img src={props.image} alt='card1'/>
      <h3>{props.name}</h3>
      <div className="info-group">
        <a href="">Explore {props.name}</a>
      </div>
      {/* <div className="info-group">
        <p>mr.whiskaz@catnap.meow</p>
      </div> */}

    </div>
  )
}
