import React from "react";
import '../styles/Glossary.css';
import glossary from "../assets/if-hp-ccsc-glossary.pdf";
import Navbar from '../components/Navbar';

function Glossary() {
  return (
    <div>
      <Navbar/>
      <div className = "glossaryWrapper">
      <h2> Glossary </h2>
      <embed src={glossary} type="application/pdf" width="100%" height="500px" />
      </div>
    </div>
  );
}

export default Glossary;
