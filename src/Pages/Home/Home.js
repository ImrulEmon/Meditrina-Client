import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import "./Home.css"
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
const Home = () => {
    return (
        <div className='home px-12'>
            <Banner />
            <Info />
            <Services/>
            <MakeAppointment />
        </div>
    );
};

export default Home;