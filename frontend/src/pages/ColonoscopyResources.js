import React from 'react'
import '../styles/ColonoscopyResources.css';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';

function ColonoscopyResources() {

  const [isNoNarr, setNoNarr] = useState(true);
  const [isEngNarr, setEngNarr] = useState(false);
  const [isManNar, setManNar] = useState(false);
  const [isCantNar, setCantNar] = useState(false);

  const handleButtonClick = (buttonId) => {
    if (buttonId === 'noNarration') {
      setNoNarr(true);
      setEngNarr(false);
      setManNar(false);
      setCantNar(false);
    } else if (buttonId === 'englishNarration') {
      setNoNarr(false);
      setEngNarr(true);
      setManNar(false);
      setCantNar(false);
    } else if (buttonId === 'mandarinNarration') {
      setNoNarr(false);
      setEngNarr(false);
      setManNar(true);
      setCantNar(false);
    }
    else {
      setNoNarr(false);
      setEngNarr(false);
      setManNar(false);
      setCantNar(true);
    }
  }
  return (
    <div className='colonoscopyresources'>
    <div className='generalResources'>
    <h2>General Resources</h2>
    <ul className='resourcesList'>
    <li><Link to="/coloncancerinfo">Colon Cancer Screening Information</Link></li>
    <li><Link to="/pre-colonoscopy-diet">Pre-colonoscopy Diet Information</Link></li>
    <li><Link to="/colonoscopyResources">Colyte Prep Instructions</Link></li>
    <li><Link to="/faq">Frequenty Asked Questions</Link></li>
    <li><Link to="/glossary">Glossary</Link></li>
    </ul>
    </div>
    <div className='beforeArrive'>
      <h2>Before You Arrive</h2>
      <div className='buttonsArrive'>
        <Button id='noNarration' variant="contained" onClick={() => handleButtonClick('noNarration')}>Screening for Colon Cancer (no Narration)</Button>
        <Button id='englishNarration' variant="contained" onClick={() => handleButtonClick('englishNarration')}>Screening for Colon Cancer (English Narration)</Button>
        <Button id='mandarinNarration' variant="contained" onClick={() => handleButtonClick('mandarinNarration')}>Screening for Colon Cancer (Mandarin Narration)</Button>
        <Button id='cantoneseNarration' variant="contained" onClick={() => handleButtonClick('cantoneseNarration')}>Screening for Colon Cancer (Cantonese Narration)</Button>
        </div>
        <div className='video'>
        {isNoNarr && <object data="/noNarration.pdf" type="application/pdf"  width="100%" height="500">    <p>Sorry, this PDF document cannot be displayed in the browser.</p>
        </object>}
        {isEngNarr && <iframe width="560" height="315" src="/screeningEnglish.mp4" title="Video Title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        {isManNar && <iframe width="560" height="315" src="/screeningMandarin.mp4" title="Video Title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        {isCantNar && <iframe width="560" height="315" src="/screeningCantonese.mp4" title="Video Title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        </div>
    </div>
    <div className='moreInfo'>
      <h2>More Information</h2>
      <ul className='moreInfoList'>
    <li><a href="https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1026405" target="_blank" rel="noopener noreferrer">Alberta Colorectal Cancer Screening Program</a></li>
    <li><a href="https://albertafindadoctor.ca/" target="_blank" rel="noopener noreferrer">Find a Family Physician in Calgary</a></li>
    <li><a href="https://www.colorectalcancercanada.com/" target="_blank" rel="noopener noreferrer">Colorectal Cancer Association of Canada</a></li>
    <li><a href="https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=hw198266" target="_blank" rel="noopener noreferrer">MyHealth Alberta: Colorectal Cancer Information</a></li>
    </ul>
    </div>

    </div>
  )
}

export default ColonoscopyResources