import { useContext} from 'react'
import { CurrentUser } from '../context/CurrentUser'

const UserData = (data) => {
    const{ currentUser } = useContext(CurrentUser)
    console.log(data)

  //   const[userDetails,setUserDetails]=useState(null)
  //   const[error,setError] =useState(null)
  //   let userId=currentUser.user_id
    
  //   console.log(userId)
    
  //  useEffect(()=>{
  //    const fetchDetails= async(userId)=>{
  //       try{
  //         const response = await fetch(`http://localhost:5000/users/${userId}`)
  //         console.log('This is the response : ' , response)
  //         const details = await response.json()
  //         console.log('This is the details : ' , details)
  //         setUserDetails(details) 
  //     } catch(e){
  //       setError(error)
  //       console.log('error',error)
  //     }
  //   fetchDetails(userId)  
  //   }},[userId])
  //   userId=currentUser.user_id
  return (
    <div className='profile'>
    <div>
        <img src='./profile-photo-icon.jpg' alt='profile pic'/><br />
        <p>{currentUser.user_f_name} {currentUser.user_l_name}</p>
        <p>USERID:{currentUser.user_id}</p>    
    </div>
    <div>
      <h3>User Details:</h3>
      <p>Start Date: {data.data_start_date}</p>
      <p>Starting Weight:  {data.data_start_weight} lbs</p>
      <p>Starting Waist:  {data.data_start_waist} inches</p>
      <p>Starting Chest:  {data.data_start_chest} inches</p>
      <p>Starting Shoulders: {data.data_start_shoulder} inches</p>
      <p>Starting Biceps:  {data.data_start_biceps} inches</p>
      <p>Starting Thighs:  {data.data_start_thighs} inches</p>
      <p>Starting Calves:  {data.data_start_calves} inchees</p>                              
    </div>
  </div>
  )
}

export default UserData