import React from "react";
import "../styles/Faq.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";

function Faq() {
  const [isButtonClicked0, setIsButtonClicked0] = useState(false);
  const [isButtonClicked1, setIsButtonClicked1] = useState(false);
  const [isButtonClicked2, setIsButtonClicked2] = useState(false);
  const [isButtonClicked3, setIsButtonClicked3] = useState(false);
  const [isButtonClicked4, setIsButtonClicked4] = useState(false);
  const [isButtonClicked5, setIsButtonClicked5] = useState(false);
  const [isButtonClicked6, setIsButtonClicked6] = useState(false);
  const [isButtonClicked7, setIsButtonClicked7] = useState(false);
  const [isButtonClicked8, setIsButtonClicked8] = useState(false);
  const [isButtonClicked9, setIsButtonClicked9] = useState(false);
  const [isButtonClicked10, setIsButtonClicked10] = useState(false);
  const [isButtonClicked11, setIsButtonClicked11] = useState(false);
  const [isButtonClicked12, setIsButtonClicked12] = useState(false);
  const [isButtonClicked13, setIsButtonClicked13] = useState(false);
  const [isButtonClicked14, setIsButtonClicked14] = useState(false);
  const [isButtonClicked15, setIsButtonClicked15] = useState(false);

  const handleClick0 = () => {
    if (isButtonClicked0) setIsButtonClicked0(false);
    else setIsButtonClicked0(true);
  };
  const handleClick1 = () => {
    if (isButtonClicked1) setIsButtonClicked1(false);
    else setIsButtonClicked1(true);
  };
  const handleClick2 = () => {
    if (isButtonClicked2) setIsButtonClicked2(false);
    else setIsButtonClicked2(true);
  };
  const handleClick3 = () => {
    if (isButtonClicked3) setIsButtonClicked3(false);
    else setIsButtonClicked3(true);
  };
  const handleClick4 = () => {
    if (isButtonClicked4) setIsButtonClicked4(false);
    else setIsButtonClicked4(true);
  };
  const handleClick5 = () => {
    if (isButtonClicked5) setIsButtonClicked5(false);
    else setIsButtonClicked5(true);
  };
  const handleClick6 = () => {
    if (isButtonClicked6) setIsButtonClicked6(false);
    else setIsButtonClicked6(true);
  };
  const handleClick7 = () => {
    if (isButtonClicked7) setIsButtonClicked7(false);
    else setIsButtonClicked7(true);
  };
  const handleClick8 = () => {
    if (isButtonClicked8) setIsButtonClicked8(false);
    else setIsButtonClicked8(true);
  };
  const handleClick9 = () => {
    if (isButtonClicked9) setIsButtonClicked9(false);
    else setIsButtonClicked9(true);
  };
  const handleClick10 = () => {
    if (isButtonClicked10) setIsButtonClicked10(false);
    else setIsButtonClicked10(true);
  };
  const handleClick11 = () => {
    if (isButtonClicked11) setIsButtonClicked11(false);
    else setIsButtonClicked11(true);
  };
  const handleClick12 = () => {
    if (isButtonClicked12) setIsButtonClicked12(false);
    else setIsButtonClicked12(true);
  };
  const handleClick13 = () => {
    if (isButtonClicked13) setIsButtonClicked13(false);
    else setIsButtonClicked13(true);
  };
  const handleClick14 = () => {
    if (isButtonClicked14) setIsButtonClicked14(false);
    else setIsButtonClicked14(true);
  };
  const handleClick15 = () => {
    if (isButtonClicked15) setIsButtonClicked15(false);
    else setIsButtonClicked15(true);
  };
  return (
    <div className="faq-container">
      <h1 className="titleFA">Frequently Asked Questions</h1>
      <ul>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick0}>
            What is the Forzani MacPhail Colon Cancer Screening Centre?
          </p>
          {isButtonClicked0 ? (
            <p className="faq-answer" id="align">
              The Forzani and MacPhail Colon Cancer Screening Centre (CCSC) is
              the only public facility dedicated to colon cancer screening in
              Canada. Operated by Alberta Health Services, CCSC offers
              comprehensive care, with a focus on screening and early detection
              of colon cancer. CCSC occupies 23,000 square feet and features six
              endoscopy rooms, three reprocessing rooms, 24 recovery beds, six
              nurseclinician pre-assessment rooms and a theatre for public and
              professional educational activities. Beyond providing clinical
              screening and treatment, CCSC is actively engaged in research
              including population health studies and the evaluation of all
              current and potential techniques for colon cancer screening,
              including virtual colonography. A large biorepository will allow
              for translational research in the area.
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick1}>
            Why has CCSC been developed?
          </p>
          {isButtonClicked1 ? (
            <p className="faq-answer" id="align">
              CCSC was created to increase capacity in the Calgary Health Region
              for the screening, and early detection of and treatment of colon
              cancer. This reflects what we now know about a disease, which
              results in the death of approximately 9,000 Canadians each year.
              This commitment to expanded screening capacity in the Calgary
              region underlies what we now know about this disease - it can be
              effectively prevented and treated when it is detected through
              screening in its earliest stages. An added benefit of CCSC is that
              it frees up capacity in the existing hospital-based system
              currently used for colon cancer screening, for the treatment of
              those with acute gastrointestinal disease. The number of
              colonoscopies performed each year at the CCSC has grown from
              nearly 5,000 in 2008 to over 18,000 in 2013. At the same time, the
              number of diagnostic colonoscopies and other endoscopic procedures
              performed at the hospital endoscopy units has also grown. This
              represents a remarkable increase in the capacity to perform
              colonoscopies, an essential diagnostic tool for colon cancer.
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick2}>
            Who runs CCSC?
          </p>
          {isButtonClicked2 ? (
            <p className="faq-answer" id="align">
              CCSC is funded by Alberta Health Services (AHS) and is part of
              Alberta's publicly funded health care system.
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick3}>
            What services does CCSC provide?
          </p>
          {isButtonClicked3 ? (
            <p className="faq-answer" id="align">
              The primary purpose of CCSC is to reduce the incidence of and risk
              of dying from colon cancer, by providing colon cancer screening.
              When you come to CCSC for preventative screening the medical staff
              will determine what, if any, tests or procedures are required.
              CCSC is fully equipped with state of the art equipment to perform
              colonoscopies, the most effective way to screen for and detect
              colon cancer in its earliest stages. Beginning November 2013,
              alternative screening techniques will include the Fecal
              Immunochemical Test (FIT) will will replace the previously used
              Home Stool Test. The FIT will be a single sample test, rather than
              three samples used in the Home Stool Test. Research protocols will
              be used to assess other screening techniques including virtual
              colonography and fecal genetic testing. However, the latter tests
              will not be a part of the general care provided at CCSC.
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick4}>
            Is there a fee for services provided at CCSC?
          </p>
          {isButtonClicked4 ? (
            <p className="faq-answer" id="align">
              People do not pay a fee for their visit to CCSC. CCSC is part of
              the publicly funded Alberta Health system.
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick5}>
            How do you decide what patients to see first and are there
            eligibility requirements?
          </p>
          {isButtonClicked5 ? (
            <p className="faq-answer" id="align">
              When your physician refers you for colon cancer screening, you
              will be assigned a priority and recommended screening test based
              on the information your doctor has about your health and the
              results of a Fecal Immunochemical Test (FIT), if you have
              completed one. Highest priority will be given to those with a
              positive Fecal Immunochemical Test (FIT) • Incomplete referrals,
              referrals for patients that do not meet current screening
              guidelines, and referrals that do not meet eligibility criteria
              will not be accepted and will be returned to the referring
              physician. Criteria The criteria for being referred for colon
              cancer screening is as follows: 1. Under age 75 with valid AHCIP
              coverage and eligible reason for referral (see below) 2. No
              symptoms—including no gastrointestinal signs or symptoms requiring
              specialist consultation (i.e. rectal bleeding, anemia, new
              gastrointestinal symptoms) 3. No medical conditions that would
              increase the risk of sedation or colonoscopy. If you are taking
              Coumadin, you need to inform your doctor as there is an increased
              risk of bleeding during the procedure.
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick6}>
            How many patients does CCSC see?
          </p>
          {isButtonClicked6 ? (
            <p className="faq-answer" id="align">
              CCSC will see approximately 20,000 people annually.
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick7}>
            HHow long is the wait for an appointment?
          </p>
          {isButtonClicked7 ? (
            <p className="faq-answer" id="align">
              pending text
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick8}>
            I need to change my appointment—whom do I call?
          </p>
          {isButtonClicked8 ? (
            <p className="faq-answer" id="align">
              If you need to change your appointment for your colonoscopy
              procedure, please contact the CCSC Reception Desk at 403-944-
              3800. Please note this is the only contact number for changing
              booking times
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick9}>
            Can I be screened for colon cancer or do I have to meet the
            screening guidelines?
          </p>
          {isButtonClicked9 ? (
            <p className="faq-answer" id="align">
              CCSC has been established to provide extra capacity for colon
              cancer screening in the Calgary Health Region to make sure that
              people who are at an increased risk for colon cancer can be
              screened in a timely fashion. To fulfill this mandate and to
              provide safe and cost-effective screening, people must meet the
              screening guidelines to undergo screening at CCSC.
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick10}>
            How can I arrange to be screened?
          </p>
          {isButtonClicked10 ? (
            <p className="faq-answer" id="align">
              Your family physician should be involved in your overall health
              management plan and so your first step is to make an appointment
              with your doctor. If you do not have a family doctor, please go to
              Alberta College of Physicians And Surgeons - Find a Physician, or
              call Health Link Alberta toll-free at 1-866-408-5465 .
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick11}>
            Where is CCSC located?
          </p>
          {isButtonClicked11 ? (
            <p className="faq-answer" id="align">
              CCSC is located on the 6th Floor of the University of Calgary's
              Teaching, Research and Wellness Building at the Foothills Medical
              Centre. The address is: 3280 Hospital Drive,NW Calgary, AB T2N 4N1
              If you don't have a family doctor, you can find a physician by
              going to Alberta College of Physicians And Surgeons - Find a
              Physician, or calling Health Link Alberta toll-free at
              1-866-408-5465 .
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick12}>
            What is colon cancer?
          </p>
          {isButtonClicked12 ? (
            <p className="faq-answer" id="align">
              Cancer of the colon is a cancerous growth on the lining of your
              large bowel. Colon cancer is the second leading cause of death
              from cancer in Canada, after lung cancer.
            </p>
          ) : null}
        </li>
        <li>
          <p classname="faq-question" id="align" onClick={handleClick13}>
            How many people are affected by colon cancer?
          </p>
          {isButtonClicked13 ? (
            <p className="faq-answer" id="align">
              For the most recent recent colon cancer statistics, please visit
              the Canadian Cancer Society. Below are the 2012 statistics. • For
              men, the risk of developing colon cancer is 1 in 13 and 1 in 28
              will die from the disease. • One in 16 women will develop colon
              cancer and 1 in 32 can expect to die from it.
            </p>
          ) : null}
        </li>
      </ul>
    </div>
  );
}

export default Faq;
