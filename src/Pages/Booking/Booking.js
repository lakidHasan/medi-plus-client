
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Booking = () => {
    const {serviceId} =useParams();
    
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    const user = details?.find(use => use.id == serviceId)
    console.log(user)
    return (
        <div>
           <img src={user?.img} alt="" />
           <h3>Name: {user?.name}</h3>
           <h3>Name: {user?.describe}</h3>
        </div>
    );
};

export default Booking;