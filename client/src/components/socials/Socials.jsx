import React from 'react';
import instagramLogo from '../../assets/icons/instagram.png';
import githubLogo from '../../assets/icons/github.png';
import './Socials.scss';

export default function Socials() {
    return (
        <ul className='socials__container'>
            <li className='socials__item'>
                <a className='socials__link' href='https://www.instagram.com/gen_tries_crossstitch/'>
                    <img
                        className='socials__image'
                        src={instagramLogo}
                        alt='instagram'
                    >
                    </img>
                </a>
            </li>
            <li className='socials__item'>
                <a className='socials__link' href='https://github.com/SobiahSelvarajah/gen-tries-crossstitch'>
                    <img
                        className='socials__image'
                        src={githubLogo}
                        alt='github'
                    >
                    </img>
                </a>
            </li>
        </ul>
    )
}