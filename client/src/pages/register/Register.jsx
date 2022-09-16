import React from 'react';

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
                />
                <label className='register__userInfo'>
                    Email
                </label>
                <input
                    className='register__userInput'
                    type='email'
                    placeholder='Enter your email...'
                />
                <label className='register__userInfo'>
                    Password
                </label>
                <input
                    className='register__userInput'
                    type='password'
                    placeholder='Enter your password...'
                />
                <button className='register__registerButton'>
                    Register
                </button>
            </form>
            <button className='register__loginButton'>
                Login
            </button>  
        </div>      
    </section>
  )
}