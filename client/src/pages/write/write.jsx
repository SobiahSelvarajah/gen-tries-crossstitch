import React from 'react';
import crossStitch from '../../assets/images/cross-stitch.jpg';

import './write.scss';

export default function Write() {
  return (
    <section className='write__container'>
        <img 
            className='write__image'
            src={crossStitch}
            alt='postImage'
        />
        <form className='write__form'>
            <div className='write__inputContainer'>
                <label htmlFor='fileInput'>
                    <span className='write__plusIcon'>
                        +
                    </span>
                </label>
                <input 
                    className='write__fileInput'
                    id='fileInput'
                    type='file'
                    style={{display:'none'}}
                />
                <input 
                    className='write__titleInput'
                    id='titleInput'
                    type='text'
                    placeholder='Title'
                    autoFocus={true}
                />
            </div>
            <div className='write__inputContainer'>
                <textarea 
                    className='write__textInput'
                    id='textInput'
                    type='text'
                    placeholder='Stitch your story...'
                    autoFocus={true}
                />
            </div>
            <button
                className='write__submit'
                type='submit'>
                Publish
            </button>
        </form>
    </section>
  )
}