import React from 'react';
import '../styles/ColonCancerInfo.css';
import { useState } from 'react';
import Button from '@mui/material/Button';


function ColonCancerInfo() {
      
  return (
    <div className="coloninfo">
        <div className = "coloninfopdf">
            <h2>Colon Cancer Screening Information</h2>
            <object data="https://albertahealthservices.ca/assets/info/hp/ccsc/if-hp-ccsc-screening-information-package.pdf" type="application/pdf"  width="100%" height="500">  
                <p>Sorry, this PDF document cannot be displayed in the browser.</p>
            </object>
        </div>
    </div>
    
  );
}

export default ColonCancerInfo;
