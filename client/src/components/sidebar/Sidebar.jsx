import './Sidebar.scss';
import gensPicture from '../../assets/images/gensPic.jpeg';
import instagramIcon from '../../assets/icons/instagram.svg';
import Categories from '../categories/Categories';
import { InstagramIcon } from '../instagramIcon/InstagramIcon';


export default function Sidebar() {
    return(
        <>
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
                            Genevieve Williams
                            <br></br>
                            <br></br>
                            Cross stitcher with a love for books.
                        </p>
                    </div>
                    <div className='sidebar__item'>
                        <h2 className='sidebar__heading'>
                            CATEGORIES
                        </h2>
                        <Categories />
                    </div>
                    <div className='sidebar__socials'>
                        <h2 className='sidebar__heading'>
                            FOLLOW ME
                        </h2>
                        <InstagramIcon />
                    </div>
                </section>
            </aside>
        </>
    )
}