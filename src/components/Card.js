import React from 'react';
import '../App.css'

export default function Card () {
  return (
    <div className='card'>
      <img src="card1 (1).jpg" alt='card1'/>
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        {/* <img src="./images/phone-icon.png" alt='icon'/> */}
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        {/* <img src="./images/mail-icon.png" alt='cicon'/> */}
        <p>mr.whiskaz@catnap.meow</p>
      </div>

    </div>
  )
}
