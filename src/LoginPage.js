import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ loginUser, authenticateCredentials }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayError, setDisplayError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const emptyFields = () => {
        return email === '' || password === '';
    }

    const handleLogin = () => {
        if (emptyFields()) {
            setErrorMessage('Please enter all fields');
            setDisplayError(true);
            return;
        }
        let authenticatedUser = authenticateCredentials(email, password);

        if (!authenticatedUser) {
            setErrorMessage('Invalid Credentials')
            setDisplayError(true);
            return;
        }

        loginUser(authenticatedUser);
        navigate(`/user/${authenticatedUser.userId}/dashboard`);
    }

    return (
        <div id='login-page' className='flex-column'>
            <h1>Log In</h1>
            {displayError && <p className='error'>{errorMessage}</p>}
            <span className='label-input'>
                <label htmlFor='login-email'>Email:</label>
                <input id='login-email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </span>
            <span className='label-input'>
                <label htmlFor='login-password'>Password:</label>
                <input id='login-password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </span>
            <div className='flex-column align-center justify-center'>
                <button onClick={() => handleLogin()}>Log In</button>
                <Link to='/signup' className='navigate-text'>Don't have an account? Sign Up</Link>
            </div>
        </div>
    )
}

export default LoginPage