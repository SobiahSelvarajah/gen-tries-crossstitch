import Categories from '../categories/Categories';
// import InstagramIcon from '../gensInsta/GensInsta';
import './Sidebar.scss';

export default function Sidebar() {
    return(
        <>
            <aside className='sidebar__container'>
                <section className='sidebar__containerWrapper'>
                    <div className='sidebar__item'>
                        <h2 className='sidebar__heading'>
                            ABOUT ME
                        </h2>
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
                        {/* <InstagramIcon /> */}
                    </div>
                </section>
            </aside>
        </>
    )
}