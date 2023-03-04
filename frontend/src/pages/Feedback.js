import Navbar from "../components/Navbar";
import "../styles/Feedback.css"

function Feedback(){

    return (
        <div>
            <Navbar></Navbar>
            <h2>Patient Feedback Form</h2>
            <div className="feedback-container">
                <form className="feedbackform">
                    <div>
                        <label htmlFor='name'>Patient Name</label>
                        <input id='name' type="text" placeholder="Full Name"></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type="text" placeholder="Email" id="email"></input>
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone Number</label>
                        <input type="text" placeholder="Phone" id="phone"></input>
                    </div>
                    <div>
                        <label>Tell Us Your Thoughts!</label>
                        <textarea type="text" placeholder="Feedback"></textarea>
                    </div>
                    <button type="button" onClick={() => console.log('Feedback received')}>Submit</button>
                </form>
                <div>
                    <div className="clinicinfo">
                        <h4>Clinic Contact Info</h4>
                        <div>Phone: 123-456-7890</div>
                        <div>Fax: 123-456-7891</div>
                        <div>Email: ccsc@email.com</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Feedback;
