import React from 'react';

export default function Navbar() {
  return (

    <div className="nav-bar">
      <div className="image">
        <img src="mylogo.jpg" alt="Logo" className="logo" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    

  )

}
