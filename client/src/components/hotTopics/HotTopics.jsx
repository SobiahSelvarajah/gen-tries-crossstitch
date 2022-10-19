import React from 'react';
import './HotTopics.scss';

export default function HotTopics() {
    return(
        <section className='hotTopics__container'>
            <h3 className='hotTopics__heading'>
                Hot Topics
            </h3>
            <ul className='hotTopics__list'>
                <li className='hotTopics__listItem'>
                    New fabrics...but are they hit or miss?
                </li>
                <li className='hotTopics__listItem'>
                    Beginner guide for the newbie
                </li>
                <li className='hotTopics__listItem'>
                    Beads of sweat...worth it or not?
                </li>
            </ul>
        </section>
    )
}