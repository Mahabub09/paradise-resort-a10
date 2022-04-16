import React from 'react';
import Services from '../Services/Services';
import banner from './banner.jpg'
import Css from './Home.css'
const Home = () => {
    return (
        <div >
            <img className='banner' src={banner} alt="" />
            <Services></Services>
        </div>
    );
};

export default Home;