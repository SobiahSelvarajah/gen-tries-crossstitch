import './Sidebar.scss';

export default function Sidebar() {
    return(
        <aside className='sidebar__container'>
            <div className='sidebar__item'>
                <span className='sidebar__heading'>
                    ABOUT ME
                </span>
                <img
                    className='sidebar__image'
                    src=''
                    alt='myPic' 
                />
                <p className='sidebar__description'>
                    bjfdsjkfhsdkj
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
                        Stitching Challenges
                    </li>
                </ul>
            </div>
        </aside>
    )
}