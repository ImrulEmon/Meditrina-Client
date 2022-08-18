import React, { useEffect } from 'react';
import './scroll_animation';
import 'animate.css';
import Banner from './Banner';
import Info from './Info/Info';
import "./Home.css"
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact Us/Contact';
import Footer from './Footer/Footer';
 
const Home = () => {
   
    return (
        <div className='home'>
            <Banner />
            <Info />
            <Services/>
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;