import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import '../styles/Profile.css'

function Profile(){
    const location = useLocation();
    const handleBookAppointment = () => {
        window.alert(`You have canceled your appointment`);
      }
    return(
        <div>
            <Navbar></Navbar>
            <h2>Welcome {location.state.name}</h2>
            <div className="upcoming-apps">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="radio"></input></td>
                            <td>2023-03-03</td>
                            <td>9:00 AM</td>
                        </tr>
                        <tr>
                            <td><input type="radio"></input></td>
                            <td>2023-03-23</td>
                            <td>9:00 AM</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                <Link to="/colonoscopyAppointment">
                    <button className="modify-btn">Modify Colonoscopy Appointment</button>
                </Link>
                <Link to="/screeningAppointment">
                    <button className="modify-btn">Modify Screening Appointment</button>
                </Link>
                <button onClick={() => handleBookAppointment()} className="modify-btn">Cancel Appointment</button>
             </div>

            </div>
            <div className="resources">
                <h2>General Resources</h2>
                <ul className='resourcesList'>
                <li><Link to="/coloncancerinfo">Colon Cancer Screening Information</Link></li>
                <li><Link to="/pre-colonoscopy-diet">Pre-colonoscopy Diet Information</Link></li>
                <li><Link to="/colonoscopyResources">Colyte Prep Instructions</Link></li>
                <li><Link to="/faq">Frequenty Asked Questions</Link></li>
                <li><Link to="/glossary">Glossary</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;
