import {useContext, useState } from 'react';
import { CurrentUser } from '../context/CurrentUser';
import { EditUserInfo } from '../components/UserDataEdit'
import { UserDataForm } from '../components/UserDataForm'

const Profile = () => {
    const {currentUser} =useContext(CurrentUser)    
    console.log(currentUser)

    const [editingUserDataId, setEditingUserDataId] = useState(null);
    const [display, setDisplay] = useState(false);
    const [addDisplay, setAddDisplay] = useState(false);


//Workout Delete request
async function deleteUserData(currentUser) {
    try {
        await fetch(`http://localhost:5500/workouts/${currentUser.user.user_id}`, {
            method: 'DELETE',
        });
        // After the Delete request is complete, reload page
        window.location.reload()
    } catch (error) {
        console.error(error);
    }
 }

 const displayForm = (currentUser) => {
    setEditingUserDataId(currentUser.userdata.data_user_id);
    (display) ? setDisplay(false) : setDisplay(true)
}

const displayAddForm = () => {
    !addDisplay ? setAddDisplay(true) : setAddDisplay(false)
}

    return (
        <div>
            {currentUser ? (
            currentUser.userdata ? (
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
                        <button onClick={() => displayForm(currentUser.userdata)} className='btn btn-warning fw-bold'>Edit</button>
                        {editingUserDataId === currentUser.userdata.data_user_id && display ? <EditUserInfo UserData={currentUser.userdata} /> : null} 
                        <button onClick={() => deleteUserData(currentUser.userdata.data_user_id)} className='btn btn-danger fw-bold'>Delete</button>                          
                    </div> 
                </div>
            </div>
            ):(
                // add code to navigate to create userData Form
                <div>
                    <h1 id='greet' className='fw-bold'>Welcome, {currentUser?.user.user_f_name}!</h1>
                    <h4 id='greet' className='fw-bold'>Let's get FIT!!</h4>
                    <div className='profile'>
                        <img src='./profile-photo-icon.jpg' alt='profile pic'/><br />
                        <p><b>{currentUser?.user.user_f_name} {currentUser?.user.user_l_name}</b></p>
                        <p><b>USERID:{currentUser?.user.user_id}</b></p>    
                    </div>
                    <h3> No User Details Yet!</h3>
                    <div>
                        <p> please insert information to keep track of your progress</p>
                        { !addDisplay && currentUser ? <button className='btn btn-secondary mt-2 fw-bold' data-bs-toggle="modal" data-bs-target="#form-modal"> Add Workout </button>: currentUser ? <button onClick={() => displayAddForm()} className='btn btn-secondary mt-1'>-</button> : null}
                        { currentUser ? <UserDataForm UserData = {currentUser} /> : null}

                    </div>
            
                </div>
            )
        
              
            ) : (
                // code to navigate to login
                <div>
                    <h3 id='loading'>Loading...</h3>
                    {// potentially can be changed to something else, or extend time in case its just taking a while to load?
                    setTimeout(() => {
                        return (
                            <a className='btn btn-secondary' href='/login'>Login?</a>
                        )
                    }, 5000)}
                </div>
            )}
        </div>
    );
};

export default Profile;