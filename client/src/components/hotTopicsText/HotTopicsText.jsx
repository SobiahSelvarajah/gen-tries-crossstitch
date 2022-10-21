import React from 'react';

export default function HotTopicsText() {
    return(
        <section className='hotTopicsText__container'>
            <h3 className='hotTopicsText__heading'>
                Hot Topics
            </h3>
            <ul className='hotTopicsText__list'>
                <li className='hotTopicsText__listItem'>
                    New fabrics...but are they hit or miss?
                </li>
                <li className='hotTopicsText__listItem'>
                    Beginner guide for the newbie
                </li>
                <li className='hotTopicsText__listItem'>
                    Beads of sweat...worth it or not?
                </li>
            </ul>
        </section>
    )
}