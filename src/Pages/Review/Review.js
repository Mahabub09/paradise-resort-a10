import React from 'react';
import men from './men.jpg'
import women from './women.jpg'


const Review = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary'>Our Customer says</h2>
            <div className=' d-flex '>

                <div className=' d-flex flex-column w-50 shadow p-4 rounded'>
                    <img className='w-25 rounded-circle' src={men} alt="" />
                    <h3>Lake Tahoe Adventure</h3>
                    <p>I had a wonderful time during the trip. The guide was informative, friendly and attentive to our entire group! I definitely plan to be a returning customer and recommend this to my friends and family!</p>

                </div>
                <div className=' d-flex flex-column w-50 shadow p-4 rounded'>
                    <img className='w-25 rounded-circle' src={women} alt="" />
                    <h3>Canadian Rockies</h3>
                    <p>The sightseeing and activities were better than we even thought! I still can't believe we did so much in such a short time, but we did not feel stressed. We really loved the tour and would do it all over again in a minute! Thanks.</p>
                </div>

            </div>
        </div>
    );
};

export default Review;