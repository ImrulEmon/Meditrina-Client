import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import "./Home.css"
const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <Info />
        </div>
    );
};

export default Home;