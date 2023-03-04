import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <ul className="footer-links">
      <li><Link to="/">Home</Link></li>

        <li><Link to="/colonoscopyResources">Colonoscopy Resources</Link></li>
        <li><Link to="/patient-feedback">Patient Feedback</Link></li>
        <li><a href="https://www.albertahealthservices.ca/info/Page12630.aspx" target="_blank" rel="noopener noreferrer">811 HealthLink</a></li>
        <li><a href="https://www.albertahealthservices.ca/" target="_blank" rel="noopener noreferrer">AHS Website</a></li>
        <li><Link to="/contactUs">Contact Us</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/glossary">Glossary</Link></li>
      </ul>
    </div>
  );
}

export default Footer;

