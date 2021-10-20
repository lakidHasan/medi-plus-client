import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect( ()=>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    } ,[])
    return (
       <div id='doctors'>
          <h5 className="text-primary mt-5">MEET OUR EXPERIENCED DOCTOR</h5>
          <h2 className="text-primary mb-3">WE ARE EXPERTS IN OUR FIELD</h2>
         <div className="doctors">
            {   
            doctors.map(doctor => <Doctor
            key={doctor.id}
            doctor={doctor}
            ></Doctor>)
            }
        </div>
       </div>
    );
};

export default Doctors;