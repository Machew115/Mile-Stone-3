import React, { useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser'; // import the CurrentUser

const Home = () => {
    const { currentUser } = useContext(CurrentUser); // get the currentUser from the context

    return (
        <div>
        {currentUser ? (
            <div>
            <h1>Welcome, {currentUser.user_f_name}!</h1>
            </div>
        ) : (
            <p>Loading user information...</p>
        )}
        </div>
    );
};

export default Home;

