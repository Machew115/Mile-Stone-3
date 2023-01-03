import {useContext} from 'react';
import { CurrentUser } from '../context/CurrentUser';
import Login from './Login';

const Profile = () => {
    const {currentUser} =useContext(CurrentUser)    

    return (
        <div>
            {currentUser ? (
            <div>
                    <h1 id='greet' className='fw-bold'>Welcome, {currentUser?.user.user_f_name}!</h1>
                    <h4 id='greet' className='fw-bold'>Let's get FIT!!</h4>
                    <div className='profile'>
                    <div>
                        <img src='./profile-photo-icon.jpg' alt='profile pic'/><br />
                        <p><b>{currentUser?.user.user_f_name} {currentUser?.user.user_l_name}</b></p>
                        <p><b>USERID:{currentUser?.user.user_id}</b></p>    
                    </div>
                    <div text-align='left'>
                    <h3>User Details:</h3>
                    <p>Start Date: <b>{currentUser?.userdata.data_start_date}</b></p>
                    <p>Starting Weight: <b>{currentUser?.userdata.data_start_weight} lbs</b></p>
                    <p>Starting Waist: <b>{currentUser?.userdata.data_start_waist} inches</b></p>
                    <p>Starting Chest: <b>{currentUser?.userdata.data_start_chest} inches</b></p>
                    <p>Starting Shoulders: <b>{currentUser?.userdata.data_start_shoulders} inches</b></p>
                    <p>Starting Biceps:  <b>{currentUser?.userdata.data_start_biceps} inches</b></p>
                    <p>Starting Thighs:  <b>{currentUser?.userdata.data_start_thighs} inches</b></p>
                    <p>Starting Calves:  <b>{currentUser?.userdata.data_start_calves} inchees</b></p>                               
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