import React, { useContext} from 'react';
import { CurrentUser } from '../context/CurrentUser'; // import the CurrentUser
import Navbar from '../components/Navbar';
import Login from '../pages/Login'
import UserData from './UserData';

const Profile = () => {
   const { currentUser } = useContext(CurrentUser); // get the currentUser from the context
   

    return (
        <div>
            <Navbar/>
            {currentUser ? (
                <div>
                    <h1 id='greet' className='fw-bold'>Welcome, {currentUser.user_f_name}!</h1>
                    <h4 id='greet' className='fw-bold'>Let's get FIT!!</h4>
                   
                 <UserData/> 
                </div>  
            ) : (
                <Login />
            )}
        </div>
    );
};

export default Profile;