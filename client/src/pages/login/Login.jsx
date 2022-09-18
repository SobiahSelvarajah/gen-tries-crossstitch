import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export default function Login() {
  return (
    <section className='login__container'>
        <div className='login__containerWrapper'>
            <h1 className='login__heading'>
                Login
            </h1>
            <form className='login__form'>
                <label className='login__userInfo'>
                    Email
                </label>
                <input
                    className='login__userInput'
                    type='email'
                    placeholder='Enter your email...'
                />
                <label className='login__userInfo'>
                    Password
                </label>
                <input
                    className='login__userInput'
                    type='password'
                    placeholder='Enter your password...'
                />
                <button className='login__loginButton'>
                    Login
                </button>
            </form>
            <button className='login__registerButton'>
                <Link className='login__registerLink' to='/register'>Register</Link> 
            </button>  
        </div>      
    </section>
  )
}