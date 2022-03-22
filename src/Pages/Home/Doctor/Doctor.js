import React from 'react';
import "./Doctor.css";

const Doctor = ({doctor}) => {
    const {img, name, title} = doctor;
    return (
        <div className="doctor">
            <div>
            <img src={img} alt="" />
            </div>
            <div className="details">
            <h3 className='text-primary'>{name}</h3>
            <h5>{title}</h5>
            {/* <p>{info}</p> */}
            <button className='btn btn-primary'>Book Appointment </button>
            </div>
        </div>
    );
};

export default Doctor;