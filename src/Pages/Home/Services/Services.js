import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://sheltered-bastion-84155.herokuapp.com/services')
        .then(res =>res.json())
        .then(data => setServices(data));
    } ,[])
    return (
        <div id="services">
           <h1 className='text-primary mt-3'>Our Services</h1>
           <div  className='service-container'>
           {
                services.map(service => <Service 
                key={service.id}
                service={service}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;