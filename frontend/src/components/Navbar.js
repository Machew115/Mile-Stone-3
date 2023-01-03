import React, { /*useEffect,*/ useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser'; // import the CurrentUser
import LogoutBtn from './LogoutBtn';

const Navbar = () => {

    const { currentUser } = useContext(CurrentUser); // get the currentUser from the context


    return (
        <nav className="navbar navbar-expand-lg bg-light px-2" id='nav'>
            <div id='logo'>
                <a className="navbar-brand fw-bold" href="/">Fit Track</a>
            </div>
            {currentUser ? (
                <div id='user-menu' className='btn-group'>
                    <img id='heart' className='px-2' alt='heart and pulse' src='./heart-beat-icon.png'></img>
                    <button type="button" id='dropdown' className="btn btn-sm btn-secondary px-2 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu px-2">
                        {/* following href routes to be changed later to respective routes*/}
                        <li><a className="dropdown-item" href="/">Workout Log</a></li>
                        <li><a className="dropdown-item" href="/meals">Food Log</a></li>
                        <LogoutBtn/>
                    </ul>
                </div>
            ) : (
                <div>
                    <a className='btn btn-primary' href='/login'> Login / Sign Up </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
