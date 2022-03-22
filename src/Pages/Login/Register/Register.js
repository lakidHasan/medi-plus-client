import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
         setPassword(e.target.value)
    }
    const handleRegister = e => {
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError("password must be 6 characters long")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        
    }
    return (
        <div>
           <div>
       <div className='mx-5'>
       <form onSubmit={handleRegister}>
           <h3 className='text-primary'>Please Register</h3>
        <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" />
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">
                Already Register
                </label>
            </div>
            </div>
        </div>
        <div className='row mb-3 text-danger'>{error}</div>
        <button type="submit" className="btn btn-primary">Register</button>
    </form>
       </div>
               <p>Already you have accound? <Link to="/login">Login</Link></p>
           </div>
        </div>
    );
};

export default Register;