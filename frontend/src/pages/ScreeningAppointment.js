import React from 'react'
import '../styles/ModifyAppointment.css';
import { useState, useEffect } from 'react';

function ModifyAppointment() {
    const [appointments, setAppointments] = useState([]);
  
    useEffect(() => {
        async function fetchData() {
          const response = await fetch(
            "http://localhost:8080/api/appointment/getAvailableAppointments/"
          );
          const data = await response.json();
          setAppointments(data);
        }
    
        fetchData();
      }, []);
      const handleBookAppointment = (appointment) => {
        window.alert(`You have booked an appointment on ${appointment.Date} at ${appointment.Time} an email will be sent to you shortly`);
      }
      return (
        <div className="screeningTimes">
          <div className="times">
            <h2>Available Screening Appointment Times</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.Id}>
                    <td>{appointment.Date}</td>
                    <td>{appointment.Time}</td>
                    <td><button onClick={() => handleBookAppointment(appointment)}>Book</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  
  export default ModifyAppointment;