
// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Booking = () => {
    const {serviceId} =useParams();
    
    // const {details, setDetails} = useState([])

    // useEffect(() => {
    //     fetch('service.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    // // const user = details.find(user => user.id == serviceId)
    // // console.log(user)
    return (
        <div>
            <h1>this is booking: {serviceId}</h1>
        </div>
    );
};

export default Booking;