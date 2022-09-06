import './NavRight.scss';
import profilePic from '../../assets/gensProfile.jpg';
import searchButton from '../../assets/magnifying-glass-solid.svg';

export default function NavRight() {
    return(
        <div className="navRight__container">
            <img 
                className='navRight__profile'
                src={profilePic}
                alt='profilePic'
            />
            <img 
                className="navRight__search"
                src={searchButton}
                alt='searchButton'
            />
        </div>
    )
}