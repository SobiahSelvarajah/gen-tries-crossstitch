import { Link } from 'react-router-dom';
import './NavRight.scss';
import ProfilePic from '../profilePic/ProfilePic';
import SearchButton from '../searchButton/SearchButton';

export default function NavRight() {
    const user = false;
    return(
        <div className="navRight__container">
            {user ? (
                    <ProfilePic />                 
                ) : (
                <>
                    <Link className='navRight__link' to='/login'>LOGIN</Link>
                    <Link className='navRight__link' to='./register'>REGISTER</Link>
                </>
            )}
            <SearchButton />
        </div>
    )
}