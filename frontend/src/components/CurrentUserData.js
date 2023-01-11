import React from 'react';
import {useState} from 'react';
//import { CurrentUser } from '../context/CurrentUser';
//import { useNavigate } from 'react-router-dom';

const CurrentUserData = () => {
//   const navigate= useNavigate()

//   const currentUser=useContext(CurrentUser)
  const [user, setUser]=useState({
    data_user_id: 2,
    data_current_date: new Date(),
    data_current_weight: '',
    data_current_waist: '',
    data_current_chest: '',
    data_current_shoulders: '',
    data_current_biceps: '',
    data_current_thighs: '',
    data_current_calves: ''
});

const[error, setError] =useState(null)

  async function handleSubmit(e){
    e.preventDefault();
    
    // Make a request to the server to create a new user
    const response = await fetch(`http://localhost:5500/users/currentData`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    await response.json()
    if(response.status===200){
      //  navigate(`./profile`);
    } else {
        setError(`Could not add data for user 2`)
    }
}
  
return (
  <main className=' w-50 mt-3'>
    <form className='add-form w-50 mt-4' onSubmit={handleSubmit}>
        <h1> Add Your Current Measurements </h1>
        {error && <div>{error}  <a href="/login"><button type='button'>Login</button></a></div>}   
        <div className='input-hold w-50 mt-3'>
            <input
                className='w-100 input_'
                placeholder=' '
                type="text"
                name="data_current_weight"
                id="data_current_weight"
                onChange={e=>setUser({...user,data_current_weight:e.target.value})}
            />
            <label className='fw-bold _label' htmlFor="data_current_weight">How Much Do You Weigh (lbs):</label>
        </div>
        <br />
        <div className='input-hold w-50 mt-3'>
            <input
                className='w-100 input_'
                placeholder=' '
                type="text"
                name="data_current_waist"
                id="data_current_waist"
                onChange={e=>setUser({...user,data_current_waist:e.target.value})}
            />
            <label className='fw-bold _label' htmlFor="data_current_waist">Waist Size (inches):</label>
        </div>
        <br />
        <div className='input-hold w-50 mt-3'>
            <input
                className='w-100 input_'
                placeholder=' '
                type="text"
                name="data_current_chest"
                id="data_current_chest"
                onChange={e=>setUser({...user,data_current_chest:e.target.value})}
            />
            <label className='fw-bold _label' htmlFor="data_current_chest">Chest Size (inches):</label>
        </div>
        <br />
        <div className='input-hold w-50 mt-3'>
            <input
                className='w-100 input_'
                placeholder=' '
                type="text"
                name="data_current_shoulders"
                id="data_current_shoulders"
                onChange={e=>setUser({...user,data_current_shoulders:e.target.value})}
            />
            <label className='fw-bold _label' htmlFor="data_current_shoulders">Shoulders Size (inches):</label>
        </div>
        <br />
        <div className='input-hold w-50 mt-3'>
            <input
                className='w-100 input_'
                placeholder=' '
                type="text"
                name="data_current_biceps"
                id="data_current_biceps"
                onChange={e=>setUser({...user,data_current_biceps:e.target.value})}
            />
            <label className='fw-bold _label' htmlFor="data_current_biceps">Biceps Size (inches):</label>
        </div>
        <br />
        <div className='input-hold w-50 mt-3'>
            <input
                className='w-100 input_'
                placeholder=' '
                type="text"
                name="data_current_calves"
                id="data_current_calves"
                onChange={e=>setUser({...user,data_current_calves:e.target.value})}
            />
            <label className='fw-bold _label' htmlFor="data_current_calves">Calves Size (inches):</label>
        </div>
        <br />
        <div className='input-hold w-50 mt-3'>
            <input
                className='w-100 input_'
                placeholder=' '
                type="text"
                name="data_current_thighs"
                id="data_current_thighs"
                onChange={e=>setUser({...user,data_current_thighs:e.target.value})}
            />
            <label className='fw-bold _label' htmlFor="data_current_thighs">Thighs Size (inches):</label>
        </div>
        <br />
        <button className='btn btn-secondary mt-5 w-50 fw-bold' type="submit">Submit Measurements</button>
    </form>
    <div className='w-50 mt-4'>
      <a href='./profile'>
        <button style={{justifyContent: 'center', marginLeft:'auto',marginRight:'auto'}} className='btn btn-secondary mt-5 w-100 fw-bold' >Go Back</button>
        </a>
    </div>
  </main>  
);
};

export default CurrentUserData