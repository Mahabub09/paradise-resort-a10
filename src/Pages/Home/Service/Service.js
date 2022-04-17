import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { city, img, title, price, duration } = service
    return (
        <div>
            <div>
                <div className='service container'>
                    <img className='w-100' src={img} alt="" />
                    <div className=' service-title d-flex justify-content-between align-items-center px-3 my-2'>
                        <div><h4><i>{city}</i></h4>
                            <h6><b>{title}</b></h6>
                        </div>
                        <div>
                            <h5>{duration}</h5>
                            <p><b>Cost: {price}</b></p>
                        </div>
                    </div>
                    <button className='btn btn-primary'>Book: {city}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;