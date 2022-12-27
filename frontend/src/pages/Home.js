import React, { useState, useEffect } from 'react';
// useContext to be added later to get the user info after login***

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
        const response = await fetch('/'); // make a GET request to the server(to be updated with server info) to fetch user
        const user = await response.json();
        setUser(user);
        }
        fetchUser();
    }, []); // only execute the fetch request once when the component mounts

    return (
        <div>
        {user ? (
            <div>
            <h1>Welcome, {user.name}!</h1>
            </div>
        ) : (
            <p>Loading user information...</p>
        )}
        </div>
    );
}

export default Home;
