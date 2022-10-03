import React from 'react';
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg'; 
import './SinglePost.scss';

const SinglePost = ({post}) => {
    return(
        <main className='singlePost__container'>
            <div className='singlePost__imageContainer'>
                {post.postImage && (
                    <img 
                        className='singlePost__postImage'
                        src={post.postImage}
                        alt='blogPostImage'
                    />                    
                )}
            </div>
            <article className='singlePost__textWrap'>
                <section className='singlePost__titleContainer'>
                    <h1 className='singlePost__postTitle'>
                        {post.postTitle}
                    </h1>
                    <div className='singlePost__editIcons'>
                        <img 
                            className='singlePost__editIcon'
                            src={editIcon}
                            alt='editIcon'
                        />
                        <img 
                            className='singlePost__deleteIcon'
                            src={deleteIcon}
                            alt='deleteIcon'
                        /> 
                    </div>
                </section>
                <section className='singlePost__info'>
                    <h4 className='singlePost__username'>
                        {post.username}
                    </h4>
                    <span className='singlePost__timestamps'>
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </section>
                <p className='singlePost__description'>
                    {post.descrription}
                </p>
            </article>
        </main>
    )
}

export default SinglePost;