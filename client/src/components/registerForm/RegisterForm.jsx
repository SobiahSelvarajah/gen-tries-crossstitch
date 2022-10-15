import React from "react";
import { useState } from 'react';
import axios from 'axios';
import './RegisterForm.scss';

export default function RegisterForm() {

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
        <form className='registerForm__form' onSubmit={handleSubmit}>
            <label className='registerForm__userInfo'>
                Username
            </label>
            <input
                className='registerForm__userInput'
                type='text'
                placeholder='Enter your username...'
                required
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className='registerForm__userInfo'>
                Email
            </label>
            <input
                className='registerForm__userInput'
                type='email'
                id='email'
                placeholder='Enter your email...'
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <label className='registerForm__userInfo'>
                Password
            </label>
            <input
                className='registerForm__userInput'
                type='password'
                placeholder='Enter your password...'
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='registerForm__registerButton' type='submit'>
                Register
            </button>
        </form>
    )
};