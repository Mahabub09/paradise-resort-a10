import React from 'react';
import { FaOpencart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, city, img, title, price, duration, description } = service
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div>
            <div className='service container shadow-lg p-3 mb-5 bg-body rounded'>
                <img className='w-100' src={img} alt="" />
                <div className=' d-flex justify-content-between align-items-center px-3 my-2'>
                    <div><h4><i>{city}</i></h4>
                        <h6><b>{title}</b></h6>
                    </div>
                    <div>
                        <h5>{duration}</h5>
                        <p><b>Cost: {price}</b></p>
                    </div>
                </div>
                <p><small><i>{description}</i></small></p>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary align-items-center'> <FaOpencart className='mx-2 '></FaOpencart>Book: {city}</button>
            </div>
        </div>
    );
};

export default Service;