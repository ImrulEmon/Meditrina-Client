import React, { useState } from 'react';
import Footer2 from '../../Components/Footer2/Footer2';
import './Appointment.css';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date,setDate]=useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailableAppointments date={date}/>
            <Footer2/>
        </div>
    );
};

export default Appointment;