import React from 'react';
import crossStitch from '../../assets/images/cross-stitch.jpg';

import './PublishPost.scss';

export default function PublishPost() {
  return (
    <section className='publishPost__container'>
        <img 
            className='publishPost__image'
            src={crossStitch}
            alt='postImage'
        />
        <form className='publishPost__form'>
            <div className='publishPost__inputContainer'>
                <label htmlFor='fileInput'>
                    <span className='publishPost__plusIcon'>
                        +
                    </span>
                </label>
                <input 
                    className='publishPost__fileInput'
                    id='fileInput'
                    type='file'
                    style={{display:'none'}}
                />
                <input 
                    className='publishPost__titleInput'
                    id='titleInput'
                    type='text'
                    placeholder='Title'
                    autoFocus={true}
                />
            </div>
            <div className='publishPost__inputContainer'>
                <textarea 
                    className='publishPost__textInput'
                    id='textInput'
                    type='text'
                    placeholder='Stitch your story...'
                    autoFocus={true}
                />
            </div>
            <button
                className='publishPost__submit'
                type='submit'>
                Publish
            </button>
        </form>
    </section>
  )
}