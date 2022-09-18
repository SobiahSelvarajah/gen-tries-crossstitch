import React from 'react';
import crossStitch from '../../assets/images/cross-stitch.jpg';
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg'; 
import './SinglePost.scss';

export default function SinglePost() {
    return(
        <main className='singlePost__container'>
            <div className='singlePost__imageContainer'>
                <img 
                    className='singlePost__image'
                    src={crossStitch}
                    alt='blogPostImage'
                />
            </div>
            <article className='singlePost__textWrap'>
                <section className='singlePost__headingContainer'>
                    <h1 className='singlePost__heading'>
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
                    <h4 className='singlePost__author'>
                        Genevieve
                    </h4>
                    <span className='singlePost__date'>
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