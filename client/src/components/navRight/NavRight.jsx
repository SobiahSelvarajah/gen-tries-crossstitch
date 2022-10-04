import { Link } from 'react-router-dom';
import './NavRight.scss';
import profilePic from '../../assets/images/gensProfile.jpg';
import SearchButton from '../searchButton/SearchButton';

export default function NavRight() {
    const user = false;
    return(
        <div className="navRight__container">
            {
                user ? (
                    <img 
                        className='navRight__userPic'
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
            <SearchButton />
        </div>
    )
}