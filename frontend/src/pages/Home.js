import React, { useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser'; // import the CurrentUser
import Navbar from '../components/Navbar';

const Home = () => {
    const { currentUser } = useContext(CurrentUser); // get the currentUser from the context

    return (
        <div>
            <Navbar/>
            {currentUser ? (
                <div>
                    <p id='greet' className='fw-bold'>Welcome, {currentUser.user_f_name}!</p>
                    <p id='greet' className='fw-bold'>You are logged in</p>
                </div>
            ) : (
                <p id='greet' className='fw-bold'>Welcome to FitTrack!</p>
            )}
        </div>
    );
};

export default Home;

