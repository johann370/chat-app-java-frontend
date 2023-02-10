import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignupPage = ({ createUser, checkExistingCredentials }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayError, setDisplayError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const emptyFields = () => {
        return username === '' || email === '' || password === '' || confirmEmail === '' || confirmPassword === '';
    }

    const handleSignup = () => {
        if (emptyFields()) {
            setErrorMessage("Please enter all fields");
            setDisplayError(true);
            return;
        } else if (email !== confirmEmail) {
            setErrorMessage("Emails don't match");
            setDisplayError(true);
            return;
        } else if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match");
            setDisplayError(true);
            return;
        } else if (checkExistingCredentials(username, email)) {
            setErrorMessage("An account with these credentials already exists");
            setDisplayError(true);
            return;
        }

        createUser(username, email, password);
    }

    return (
        <div id='signup-page' className='flex-column'>
            <h1>Sign Up</h1>
            {displayError && <p className='error'>{errorMessage}</p>}
            <span className='label-input'>
                <label htmlFor='signup-username'>Username:</label>
                <input id='signup-username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </span>
            <span className='label-input'>
                <label htmlFor='signup-email'>Email:</label>
                <input id='signup-email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </span>
            <span className='label-input'>
                <label htmlFor='signup-email-confirm'>Confirm Email:</label>
                <input id='signup-email-confirm' type='email' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}></input>
            </span>
            <span className='label-input'>
                <label htmlFor='signup-password'>Password:</label>
                <input id='signup-password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </span>
            <span className='label-input'>
                <label htmlFor='signup-password-confirm'>Confirm Password:</label>
                <input id='signup-password-confirm' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </span>
            <div className='flex-column align-center justify-center'>
                <button onClick={() => handleSignup()}>Sign Up</button>
                <Link to='/login' className='navigate-text'>Already have an account? Log In</Link>
            </div>
        </div>
    )
}

export default SignupPage