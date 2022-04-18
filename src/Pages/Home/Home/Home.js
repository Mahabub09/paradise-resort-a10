import React from 'react';
import Review from '../../Review/Review';
import Services from '../Services/Services';
import banner from './banner.jpg'
import './Home.css'
const Home = () => {
    return (
        <div >
            <img className='banner' src={banner} alt="" />
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;