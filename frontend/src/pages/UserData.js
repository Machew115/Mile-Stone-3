import React from 'react'
import { useContext,useState, useEffect} from 'react'
import { CurrentUser } from '../context/CurrentUser'

const UserData = () => {
    const{ currentUser } = useContext(CurrentUser)
    const[userDetails,setUserDetails]=useState(null)
    const userId =currentUser.user_id
    useEffect(()=>{
        const fetchDetails= async()=>{
       
        const response = await fetch(`http://localhost:5000/users/${userId}`)
        const details = await response.json()
        setUserDetails(details) 
      }
        fetchDetails()
   },[userId])

  return (
    <div className='profile'>
    <div>
        <img src='./profile-photo-icon.jpg' alt='profile pic'/><br />
        <p>{currentUser.user_f_name} {currentUser.user_l_name}</p>
        <p>USERID:{currentUser.user_id}</p>    
    </div>
    <div>
                <h1>User Details:</h1>
                <p>Start Date: {userDetails.data_start_date}</p>
                <p>Starting Weight:  {userDetails.data_start_weight} lbs</p>
                <p>Starting Waist:  {userDetails.data_start_waist} inches</p>
                <p>Starting Chest:  {userDetails.data_start_chest} inches</p>
                <p>Starting Shoulders:  {userDetails.data_start_shoulder} inches</p>
                <p>Starting Biceps:  {userDetails.data_start_biceps} inches</p>
                <p>Starting Thighs:  {userDetails.data_start_thighs} inches</p>
                <p>Starting Calves:  {userDetails.data_start_calves} inchees</p>                              
            </div>
</div>
  )
}

export default UserData