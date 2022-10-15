import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import RegisterForm from '../../components/registerForm/RegisterForm';

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