import { useState,useEffect,useContext} from 'react';
import { CurrentUser } from '../context/CurrentUser';
import Navbar from '../components/Navbar';
import Login from './Login';

const Profile = () => {
   const { currentUser } = useContext(CurrentUser); 
   const [userDetails, setUserDetails] = useState(null);
   useEffect(() => {
        async function getUserDetails() {
            const response = await fetch(`http://localhost:5000/users/${currentUser.user_id}`)
            const data = await response.json()       
            setUserDetails(data)
        }
        getUserDetails()
    }, [currentUser.user_id,userDetails])

    return (
        <div>
            <Navbar/>
           
            {currentUser ? (
            <div>
                    <h1 id='greet' className='fw-bold'>Welcome, {currentUser.user_f_name}!</h1>
                    <h4 id='greet' className='fw-bold'>Let's get FIT!!</h4>
                    <div className='profile'>
                    <div>
                        <img src='./profile-photo-icon.jpg' alt='profile pic'/><br />
                        <p>{currentUser.user_f_name} {currentUser.user_l_name}</p>
                        <p>USERID:{currentUser.user_id}</p>    
                    </div>
                    <div>
                    <h3>User Details:</h3>
                    {/* <p>Start Date: {userDetails?.data_start_date}</p>
                    <p>Starting Weight:  {userDetails?.data_start_weight} lbs</p>
                    <p>Starting Waist:  {userDetails?.data_start_waist} inches</p>
                    <p>Starting Chest:  {userDetails?.data_start_chest} inches</p>
                    <p>Starting Shoulders: {userDetails?.data_start_shoulder} inches</p>
                    <p>Starting Biceps:  {userDetails?.data_start_biceps} inches</p>
                    <p>Starting Thighs:  {userDetails?.data_start_thighs} inches</p>
                    <p>Starting Calves:  {userDetails?.data_start_calves} inchees</p>                               */}
                    </div>
            </div>
        </div>
              
            ) : (
            <Login />
            )}
        </div>
    );
};

export default Profile;