import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { city, img, title, price, duration } = service
    return (
        <div>
            <div className='service'>
                <img className='w-100' src={img} alt="" />
                <h2>{city}</h2>
                <p>Price: {price}</p>
                <p>{duration}</p>
                <p><small>{title}</small></p>
                <button className='btn btn-primary'>Book: {city}</button>
            </div>
        </div>
    );
};

export default Service;