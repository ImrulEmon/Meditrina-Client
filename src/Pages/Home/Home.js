import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import "./Home.css"
import Services from './Services/Services';
const Home = () => {
    return (
        <div className='home px-12'>
            <Banner />
            <Info />
            <Services/>
        </div>
    );
};

export default Home;