import './Sidebar.scss';
import gensPicture from '../../assets/gensPic.jpeg'

export default function Sidebar() {
    return(
        <aside className='sidebar__container'>
            <div className='sidebar__item'>
                <span className='sidebar__heading'>
                    ABOUT ME
                </span>
                <img
                    className='sidebar__image'
                    src={gensPicture}
                    alt='myPic' 
                />
                <p className='sidebar__description'>
                    Genevieve Williams
                    Cross stitcher with a love for books.
                </p>
            </div>
            <div className='sidebar__item'>
                <span className='sidebar__heading'>
                    CATEGORIES
                </span>
                <ul className='sidebar__list'>
                    <li className='sidebar__listItem'>
                        Plants
                    </li>
                    <li className='sidebar__listItem'>
                        Animals
                    </li>
                    <li className='sidebar__listItem'>
                        Seasonal
                    </li>
                    <li className='sidebar__listItem'>
                        Challenges
                    </li>
                </ul>
            </div>
        </aside>
    )
}