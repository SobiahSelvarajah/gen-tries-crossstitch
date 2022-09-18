import { Link } from 'react-router-dom';
import './NavRight.scss';
import profilePic from '../../assets/images/gensProfile.jpg';
import searchButton from '../../assets/icons/magnifying-glass-solid.svg';

export default function NavRight() {
    const user = false;
    return(
        <div className="navRight__container">
            {
                user ? (
                    <img 
                        className='navRight__profile'
                        src={profilePic}
                        alt='profilePic'
                    />                    
                ) : (
                <>
                    <Link className='navRight__link' to='/login'>LOGIN</Link>
                    <Link className='navRight__link' to='./register'>REGISTER</Link>
                </>
                )
            }
            <img 
                className="navRight__search"
                src={searchButton}
                alt='searchButton'
            />
        </div>
    )
}