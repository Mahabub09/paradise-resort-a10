import React from 'react';

const Blogs = () => {
    return (
        <div className='container' >
            <h1 className='text-center text-success'>Questions</h1>
            <div className='d-flex '>
                <div className='shadow p-4 me-2 rounded'>
                    <h5 className='text-secondary'>1. Difference between authorization and authentication</h5>
                    <li>Authentication is proving your identity,proving that you are who you say you are. The most common example of this is logging in to a system providing credentials such as username or password.</li>
                    <li>Authorization is what you're allowed to do once you've been authenticated. For example, what resources  you're allowed to access and what you can do with those resources</li></div>
                <div className='shadow p-4  rounded'>
                    <h5 className='text-secondary'>2.What other services does firebase provide other than authentication?</h5>
                    <li>Firebase provide open source backend platform ,parse hosting platform,mobile backend as a service for the enterprise,app performance management and also game backend platform and many more services.

                    </li>
                </div>
            </div>
            <div className='shadow p-4 mt-3 rounded w-50 mx-auto'>
                <h5 className='text-secondary'>
                    3.Why are we using firebase? What other options do we have to implement authentication?
                </h5>
                <li>
                    Firebase is a realtime database that allows me to create rich, collaborative applications by allowing secure access to the database directly from client-side code. If I were to sign-up with client-side login then it would not be well protected. Easy and safe way to work from Firebase. Firebase data is retained locally, and realtime events continue while offline, giving the end user a responsive experience.
                </li>

            </div>
        </div>
    );
};

export default Blogs;