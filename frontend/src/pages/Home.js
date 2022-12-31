import React, { useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser'; // import the CurrentUser

const Home = () => {
    const { currentUser,setCurrentUser } = useContext(CurrentUser); // get the currentUser from the context

    function logout(){
        localStorage.removeItem('token')
        setCurrentUser(null)
        window.location.reload(false)
    }
    return (
        <div>
        {currentUser ? (
            <div>
            <h1>Welcome, {currentUser.user_f_name}!</h1>
            <h4>You are logged in</h4>
            <button name='logout' onClick={logout}> Logout</button>
            </div>
        ) : (
            <p>Loading user information...</p>
        )}
        </div>
    );
};

export default Home;

