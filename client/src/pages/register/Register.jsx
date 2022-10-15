import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.scss';

export default function Register() {

    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post('/auth/register', {
                username,
                email,
                password
            }); 
            res.data && window.location.replace('/login');
        } catch(err) {
            setError(true);
        }
    };
    
  return (
    <section className='register__container'>
        <div className='register__containerWrapper'>
            <h1 className='register__heading'>
                Register
            </h1>
            <form className='register__form' onSubmit={handleSubmit}>
                <label className='register__userInfo'>
                    Username
                </label>
                <input
                    className='register__userInput'
                    type='text'
                    placeholder='Enter your username...'
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className='register__userInfo'>
                    Email
                </label>
                <input
                    className='register__userInput'
                    type='email'
                    id='email'
                    placeholder='Enter your email...'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className='register__userInfo'>
                    Password
                </label>
                <input
                    className='register__userInput'
                    type='password'
                    placeholder='Enter your password...'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='register__registerButton' type='submit'>
                    Register
                </button>
            </form>
            <Link className='register__loginLink' to='/login'>
                <button className='register__loginButton'>
                    Login
                </button>  
            </Link>
        </div>      
    </section>
  )
}