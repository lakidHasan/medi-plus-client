import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = ({service}) => {
    const {id, name, describe, img} = service;
    return (
        <div className="service">
              <img src={img} alt="" />
            <h3> Name: {name}</h3>
            <p>{describe}</p>
            
            <Link to={`/booking/${id}`}>
            <button className='btn btn-primary'>More info {name} ..</button>
            </Link>
            
        </div>
    );
};

export default Service;