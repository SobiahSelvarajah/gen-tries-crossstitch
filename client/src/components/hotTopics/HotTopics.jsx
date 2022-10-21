import React from 'react';
import HotTopicsText from '../hotTopicsText/HotTopicsText';
import HotTopicsImage from '../hotTopicsImage/HotTopicsImage';
import './HotTopics.scss';

export default function HotTopics() {
    return(
        <article className='hotTopics__container'>
            <HotTopicsText />
            <HotTopicsImage />
        </article>
    )
}