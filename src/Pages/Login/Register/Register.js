import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

import './Register.css'



const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='register-form mt-3'>
            <h2 className='text-success' style={{ textAlign: 'center' }}>Please Register</h2>
            <SocialLogin></SocialLogin>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)}
                    type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Paradise Resort Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='btn-success w-50 mx-auto rounded' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-success pe-auto text-decoration-none fw-bold italic' onClick={navigateLogin} >Please Login</Link> </p>

        </div>
    );
};

export default Register;