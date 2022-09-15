import React from 'react';

export default function AccountSettings() {
  return (
    <article className='accountSettings__container'>
        <div className='accountSettings__containerWrapper'>
            <section className='accountSettings__mainHeading'>
                <h1 className='accountSettings__updateHeading'>
                    Update Your Account
                </h1>
                <h5 className='accountSettings__deleteHeading'>
                    Delete Your Account
                </h5>
            </section>
            <form className='accountSettings__form'>
                <label className='accountSettings__profilePic'>
                    Profile Picture
                </label>
                <div className='accountSettings__profilePicContainer'>
                    <img
                        className='accountSettings__currentPic'
                        src=''
                        alt='currentPic'
                    />
                    <label htmlFor='fileInput'>
                        <img
                            className='accountSettings__userIcon'
                            src=''
                            alt='userIcon'
                        />
                    </label>
                    <input 
                        className='accountSettings__fileInput'
                        id='fileInput'
                        type='file'
                        style={{display:'none'}}
                    />
                </div>
                <label className='accountSettings__userInfo'>
                    Username:
                </label>
                <input 
                    className='accountSettings__username'
                    type='text' 
                    placeholder='Genevieve' 
                />
                <label className='accountSettings__userInfo'>
                    Email:
                </label>
                <input
                    className='accountSettings__userEmail'
                    type='email'
                    placeholder='genevievewilliams@hotmail.com'
                />
                <label className='accountSettings__userInfo'>
                    Password:
                </label>
                <input
                    className='accountSettings__password'
                    type='password'
                />
                <button className='accountSettings__updateButton'>
                    Update
                </button>
            </form>
        </div>
    </article>
  )
}