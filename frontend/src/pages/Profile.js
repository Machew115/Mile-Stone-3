import React, {useContext} from 'react';
import { CurrentUser } from '../context/CurrentUser';

const Profile = () => {
    const {currentUser} =useContext(CurrentUser)    


    return (
        <div>
            { currentUser && currentUser.userdata ? (
                <div>
                    <h1 id='greet' className='fw-bold'>Welcome, {currentUser?.user.user_f_name}!</h1>
                    <h4 id='greet' className='fw-bold'>{`Let's get FIT!!`}</h4>
                    <div className='profile'>
                        <div>
                            <img src='./profile-photo-icon.jpg' alt='profile pic'/>
                            <br />
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
                            <p>Starting Calves:  <b>{currentUser?.userdata.data_start_calves} inches</b></p>                               
                        </div> 
                    </div>
                </div>
            ): currentUser ? (
                // add code to navigate to create userData Form
                <div className="w-100 px-2 mt-3 profile">
                    <h1 className='fw-bold w-100 greet'>Welcome, {`${currentUser.user.user_f_name} ${currentUser.user.user_l_name}`}!</h1>
                    <h2 className='fw-bold w-100 greet'>Let's get FIT!!</h2>
                    <div className='name-details w-25 px-3'>
                        <h3 className='mt-3 py-1'>{`${currentUser.user.user_f_name} ${currentUser.user.user_l_name}`}</h3>
                        <img className='mb-3' src='./profile-photo-icon.jpg' alt='profile pic'/>
                    </div>
                    <div id="carouselExampleCaptions" className="carousel slide w-75 carousel-bg p-3" data-bs-ride="false">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="./birthday-icon.png" className="d-block w-50 m-auto p-3" alt="Birthday Cake"/>
                            <div className="carousel-caption d-none d-md-block w-25 m-auto">
                                <h5 className='car-caption'>DAY 1</h5>
                                <p className='car-caption'>You joined FitTrack {/* currentUser?.userdata.data_start_date */}(date)!</p>
                                <p className='car-caption'>You wieghed (weight) lbs...</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="measuring-tape-icon.png" className="d-block w-50 m-auto p-3" alt="measuring tape"/>
                            <div className="carousel-caption d-none d-md-block w-25 m-auto">
                                <h5 className='car-caption'>Starting Measurments</h5>
                                <p className='car-caption'>Insert starting measurments... (waist, chest, shoulders)...</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="measuring-tape-icon.png" className="d-block w-50 m-auto p-3" alt="measuring tape"/>
                            <div className="carousel-caption d-none d-md-block w-25 m-auto">
                                <h5 className='car-caption'>Measurements Continued</h5>
                                <p className='car-caption'>Insert starting measurments... (Biceps, Thighs, Calves).</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>


                    {/*<h4> No User Details Yet!</h4>*/}

                </div>
            ) : (
                // code to navigate to login
                <div>
                    <h3 id='loading'>Loadingrandom</h3>
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