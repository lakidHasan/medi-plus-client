
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle, user} = useAuth();

    const location = useLocation();
        const history = useHistory();
        const redirect_URI = location.state?.from || '/';

        // Google Login:
        const handleGoogleLogin = () => {
            signInUsingGoogle()
                        .then(() => {
                                history.push(redirect_URI);
                        })
        }
   
    return (
        <div>
            <h2>Please login</h2>
            <h2> Show Email: {user.email}</h2>
            <form>
            <input className="mt-3" placeholder="Type your email" type="text" name="" id="" />
            <br />
            <input className="mt-3" placeholder="Type your password" type="text" name="" id="" />
            <br />
            <button className="btn btn-primary mt-4">Submit</button>
            </form>
            <p>If you new this site <Link to="/register">Create Account</Link></p>
            <br />
            <button onClick= {handleGoogleLogin} className="btn btn-primary mb-3 mt-4">Google Sign In</button>
        </div>
    );
};

export default Login;