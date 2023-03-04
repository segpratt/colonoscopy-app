import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import '../styles/Profile.css'

function Profile(){
    const location = useLocation();

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
                    <button>Modify Appointment</button>
                    <button>Cancel Appointment</button>
                </div>
            </div>
            <div className="resources">
                <h2>General Resources</h2>
                <ul className='resourcesList'>
                <li><Link to="/colonoscopyResources">Colon Cancer Screening Information</Link></li>
                <li><Link to="/colonoscopyResources">Pre-colonoscopy Diet Information</Link></li>
                <li><Link to="/colonoscopyResources">Colyte Prep Instructions</Link></li>
                <li><Link to="/colonoscopyResources">Frequenty Asked Questions</Link></li>
                <li><Link to="/colonoscopyResources">Glossary</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;
