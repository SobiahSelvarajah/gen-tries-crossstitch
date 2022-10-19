import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/registerForm/RegisterForm';
import './Register.scss';

export default function Register() {
    
  return (
    <section className='register__container'>
        <div className='register__containerWrapper'>
            <h1 className='register__heading'>
                Register
            </h1>
            <RegisterForm />
            <Link className='register__loginLink' to='/login'>
                <button className='register__loginButton'>
                    Login
                </button>  
            </Link>
        </div>      
    </section>
  )
};