import React from 'react';
import { Link } from "react-router-dom";
import doctor from '../../../assets/images/doctor.png';
import makeAppointmentBg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background:`url(${makeAppointmentBg})`}}
         className='flex items-center justify-center my-5 bg-center bg-fixed bg-no-repeat'>

            <div className={`flex-1 hidden lg:block reveal fade-left`}>
                <img className='mt-[-250px]' src={doctor} alt="Appointment Doctor" />
            </div>

            <div className='flex-1 text-white py-4 px-12'>
                <h3 className={`text-primary text-2xl font-bold uppercase reveal fade-bottom lg:fade-top`}>Appointment</h3>
                <h2 className={`text-4xl py-5 reveal fade-bottom lg:fade-top`}>Make an appointment today</h2>
                <p className={`lg:pr-24 lg:text-justify py-5 reveal fade-bottom lg:fade-top`}>Dedicated 24X7 call center to set appointments with your preferred doctor. Queries regarding doctors’ appointment schedule, earliest available doctors and other appointment related information are provided through the appointment desk. Our trained, experienced and skilled appointment desk executives will assist you to get doctors’ appointments at your convenient schedule, answer your queries regarding all kinds of medical services and guide you how to avail them.For telemedicine appointment you can <span className='text-red-600 font-bold'>call 10666</span> or <span className='text-red-600 font-bold'>02 22 22 62 466</span>. Need to call to verify the payment. Unless payment is made 5-6 hours before telemedicine appointment time, appointment will not be confirmed. Patient can send his/her Investigations prior to TM for doctor assessment.</p>
                <Link to="/appointment"><PrimaryButton>Make Appointment</PrimaryButton></Link>
            </div>
            
        </section>
    );
};

export default MakeAppointment;