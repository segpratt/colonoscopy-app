import React from 'react';
import '../styles/ColonCancerInfo.css';
import { useState } from 'react';
import { Document,Page } from 'react-pdf';
import Button from '@mui/material/Button';


function ColonCancerInfo() {
    const [isConsultationAptClicked, setIsConsultationAptClicked] = useState(true);
    const [isColonoscopyAptClicked, setIsColonoscopyAptClicked] = useState(false);
    const [isMedicalServicesClicked, setIsMedicalServicesClicked] = useState(false);
  
    const handleButtonClick = (buttonId) => {
      if (buttonId === 'consultationApt') {
        setIsConsultationAptClicked(true);
        setIsColonoscopyAptClicked(false);
        setIsMedicalServicesClicked(false);
      } else if (buttonId === 'colonoscopyApt') {
        setIsColonoscopyAptClicked(true);
        setIsConsultationAptClicked(false);
        setIsMedicalServicesClicked(false);
      } else if (buttonId === 'medicalServices') {
        setIsMedicalServicesClicked(true);
        setIsConsultationAptClicked(false);
        setIsColonoscopyAptClicked(false);
      }
    }
      
  return (
    <div className="coloninfo">
        <div className = "coloninfopdf">
            <h2>Colon Cancer Screening Information</h2>
            <object data="https://albertahealthservices.ca/assets/info/hp/ccsc/if-hp-ccsc-screening-information-package.pdf" type="application/pdf"  width="100%" height="500">  
                <p>Sorry, this PDF document cannot be displayed in the browser.</p>
            </object>
        </div>
    </div>
    
    /*
    <div className="home">
        <div className="homecontain">
        <h2>Welcome Information</h2>
        <p>We provide medical care for all ages and all health concerns. Our doctors are highly qualified and experienced in treating a wide range of medical conditions.</p>
      </div>
      <div className="homecontain">
        <h2>Who Can Be Seen at the Centre</h2>
        <p>We provide medical care for all ages and all health concerns. Our doctors are highly qualified and experienced in treating a wide range of medical conditions.</p>
      </div>
      <div className="homecontain">
        <h2>Booking Your Test</h2>
        <p>Our clinic offers a comforoming environment. You can expect a high level of care from our friendly and professional stle and welcoming environment. You can expect a high level of care from our friendly and professional staff.Our clinic offers a comfortable and welcoming environment. You can expect a high level of care from our friendly and professional staff.</p>
      </div>
      <div className="homecontain">
        <h2>Clinic Hours</h2>
        <p>We are open from Monday to Friday, 9am to 5pm. We are closed on weekends and public holidays.</p>
      </div>
      <div className="homecontain">
        <h2>What to Expect</h2>
        <div className='ButtonsHome'>
        <Button id='consultationApt' variant="contained" onClick={() => handleButtonClick('consultationApt')}>Consultation Appointment</Button>
        <Button id='colonoscopyApt' variant="contained" onClick={() => handleButtonClick('colonoscopyApt')}>Colonoscopy Appointment</Button>
        <Button id='medicalServices' variant="contained" onClick={() => handleButtonClick('medicalServices')}>Medical Services Offered</Button>
        </div>
        {isConsultationAptClicked && <p>Consultation appointment paragraph here.</p>}
        {isColonoscopyAptClicked && <p>Colonoscopy appointment paragraph here.</p>}
        {isMedicalServicesClicked && <p>Medical services offered paragraph here.</p>}
      </div>
    </div>
    */
  );
}

export default ColonCancerInfo;
