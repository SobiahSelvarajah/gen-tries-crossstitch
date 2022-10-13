import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

export default function Register() {
  return (
    <section className='register__container'>
        <div className='register__containerWrapper'>
            <h1 className='register__heading'>
                Register
            </h1>
            <form className='register__form'>
                <label className='register__userInfo'>
                    Username
                </label>
                <input
                    className='register__userInput'
                    type='text'
                    placeholder='Enter your username...'
                    required
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
                />
                <label className='register__userInfo'>
                    Password
                </label>
                <input
                    className='register__userInput'
                    type='password'
                    placeholder='Enter your password...'
                    required
                />
                <button className='register__registerButton'>
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