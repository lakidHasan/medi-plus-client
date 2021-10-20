import React from 'react';
import "./Doctor.css";

const Doctor = ({doctor}) => {
    const {img, name, title, info} = doctor;
    return (
        <div className="doctor">
            <div>
            <img src={img} alt="" />
            </div>
            <div className="details">
            <h3>Name: {name}</h3>
            <h5>Title: {title}</h5>
            <p>{info}</p>
            </div>
        </div>
    );
};

export default Doctor;