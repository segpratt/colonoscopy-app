import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <img src='../ahslogo.png' alt='Logo' className='logo' />
        <div className='links'>
            <Link to="/login">Login/Register</Link>
        </div>
    </div>
  )
}

export default Navbar