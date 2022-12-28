import React, { useEffect, useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser'; // import the CurrentUser

const Home = () => {
    const { currentUser } = useContext(CurrentUser); // get the currentUser from the context

    useEffect(() => {
        console.log(currentUser); // access the currentUser in the useEffect hook
    }, [currentUser]); // only execute the useEffect hook when the currentUser changes

    return (
        <div>
        {currentUser ? (
            <div>
            <h1>Welcome, {currentUser.name}!</h1>
            </div>
        ) : (
            <p>Loading user information...</p>
        )}
        </div>
    );
};

export default Home;

