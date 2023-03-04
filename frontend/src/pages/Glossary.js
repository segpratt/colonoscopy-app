import React from "react";
import '../styles/Glossary.css';
import glossary from "../assets/if-hp-ccsc-glossary.pdf";
import Navbar from '../components/Navbar';

function Glossary() {
  return (
    <div>
      <Navbar/>
      <embed src={glossary} type="application/pdf" width="100%" height="850px" />
    </div>
  );
}

export default Glossary;
