import React from 'react';
import crossStitch from '../../assets/images/cross-stitch.jpg';
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg'; 
import './SinglePost.scss';

const SinglePost = () => {
    return(
        <main className='singlePost__container'>
            <div className='singlePost__imageContainer'>
                <img 
                    className='singlePost__postImage'
                    src={crossStitch}
                    alt='blogPostImage'
                />
            </div>
            <article className='singlePost__textWrap'>
                <section className='singlePost__titleContainer'>
                    <h1 className='singlePost__postTitle'>
                        Kittens
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
                        Genevieve
                    </h4>
                    <span className='singlePost__timestamps'>
                        2 hours ago
                    </span>
                </section>
                <p className='singlePost__description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam reiciendis ipsum quasi, odio eum veritatis iste eveniet 
                    magnam labore quas eligendi nesciunt dignissimos vel dolores 
                    at. Modi praesentium blanditiis accusantium!
                </p>
            </article>
        </main>
    )
}

export default SinglePost;