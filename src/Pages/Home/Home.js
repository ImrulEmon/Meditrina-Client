import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import "./Home.css"
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonials/Testimonials';
const Home = () => {
    return (
        <div className='home px-12'>
            <Banner />
            <Info />
            <Services/>
            <MakeAppointment />
            <Testimonials />
        </div>
    );
};

export default Home;