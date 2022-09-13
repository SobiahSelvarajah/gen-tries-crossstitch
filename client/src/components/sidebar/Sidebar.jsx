import './Sidebar.scss';
import gensPicture from '../../assets/gensPic.jpeg';
import instagramIcon from '../../assets/icons/instagram.svg';

export default function Sidebar() {
    return(
        <aside className='sidebar__container'>
            <section className='sidebar__containerWrapper'>
                <div className='sidebar__item'>
                    <h2 className='sidebar__heading'>
                        ABOUT ME
                    </h2>
                    <img
                        className='sidebar__image'
                        src={gensPicture}
                        alt='myPic' 
                    />
                    <p className='sidebar__description'>
                        Genevieve Williams<br></br>
                        Cross stitcher with a love for books.
                    </p>
                </div>
                <div className='sidebar__item'>
                    <h2 className='sidebar__heading'>
                        CATEGORIES
                    </h2>
                    <ul className='sidebar__list'>
                        <li className='sidebar__listItem'>
                            Plants
                        </li>
                        <li className='sidebar__listItem'>
                            Animals
                        </li>
                        <li className='sidebar__listItem'>
                            Festivities
                        </li>
                        <li className='sidebar__listItem'>
                            Challenges
                        </li>
                    </ul>
                </div>
                <div className='sidebar__socials'>
                    <h2 className='sidebar__heading'>
                        FOLLOW ME
                    </h2>
                    <a 
                        className='sidebar__socialLink'
                        href='https://www.instagram.com/gen_tries_crossstitch/'>
                            <img 
                                className='sidebar__socialIcon'
                                src={instagramIcon}
                                alt='instagramIcon'
                            />
                            <h4 className='sidebar__socialName'>
                                @gen_tries_crossstitch
                            </h4>
                    </a>
                </div>
            </section>
        </aside>
    )
}