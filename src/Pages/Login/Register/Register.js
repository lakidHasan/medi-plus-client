import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
           <div>
               <h2>Create Account</h2>
               <form onSubmit="">
                   <input className="mt-3" type="email" name="" id="" placeholder="Your Email" />
                   <br />
                   <input className="mt-3" type="password" name="" id="" placeholder="Your Password" />
                   <br />
                   <input className="mt-3" type="password" name="" id="" placeholder="Re-enter your password" />
                   <br />
                   <input className="mt-3" type="submit" value="Submit" />
               </form>
               <p>Already you have accound? <Link to="/login">Login</Link></p>
           </div>
        </div>
    );
};

export default Register;