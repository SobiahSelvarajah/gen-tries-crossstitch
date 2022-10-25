import { Link } from 'react-router-dom';
import './NavAuth.scss';
import ProfilePic from '../profilePic/ProfilePic';

export default function NavAuth() {
    const user = false;
    return(
        <div className="navAuth__container">
            {user ? (
                    <ProfilePic />                 
                ) : (
                <>
                    <Link className='navAuth__link' to='/login'>LOGIN</Link>
                    <Link className='navAuth__link' to='./register'>REGISTER</Link>
                </>
            )}
        </div>
    )
}