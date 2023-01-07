import React from 'react'
import { useContext, useState } from 'react'
import { CurrentUser } from '../context/CurrentUser'


const Avatar = () => {
    const {currentUser} =useContext(CurrentUser) 
    const [filename, setFilename]=useState(null)
    const [imageURL,setImageURL] = useState(currentUser.user.user_avatar_url)
    const [error,setError]=useState('')

    let userid= currentUser.user.user_id
    
   async function uploadPhoto(e){
        e.preventDefault()        
        const response = await fetch('http://localhost:5000/users/avatar', { 
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({userid,filename})
    });
        let avatar=await response.json();
        if (response.status === 200) {  
            
           setImageURL(avatar.user_avatar_url)
           setFilename('')
        } else {
            setError('Was not able to upload avatar');
        } 
    };
    
  return (
    <div>
        <img src={`${imageURL}`} alt={`${imageURL}`} /><br />
        <input type='file' name='avatar' onChange={e=>setFilename(e.target.value)} />
        <button className='primary' onClick={uploadPhoto}>Upload Photo</button>
    </div>
  )
}

export default Avatar