import Navbar from "../components/Navbar";
import "../styles/PreColDietInfo.css"

function PreColDietInfo(){

    return (
        <div>
            <Navbar></Navbar>
            <h2>Pre-Colonoscopy Diet Information</h2>
            <div className='dietinstructions'>
                {<object data="/if-hp-ccsc-diet-instructions-before-your-colonoscopy.pdf" type="application/pdf"  width="100%" height="500">    
                    <p>Sorry, this PDF document cannot be displayed in the browser.</p>
                </object>}
            </div>
        </div>
    );
}

export default PreColDietInfo;
