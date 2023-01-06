import React from 'react'
import { useContext, useState } from 'react'
import { CurrentUser } from '../context/CurrentUser'


const Avatar = () => {
    const {currentUser} =useContext(CurrentUser) 
    const [filename, setFilename]=useState(null)

    let userid= currentUser.user.user_id
    
    function uploadPhoto(e){
        e.preventDefault()
        console.log(userid,filename)
    }
    
  return (
    <div>
        <img src={`${currentUser?.user.user_avatar_url}`} alt='profile pic'/><br />
                            {currentUser?.user_avatar_url}
        <input type='file' name='avatar' value='' onChange={e=>setFilename(e.target.value)} />
        {filename}
        <button className='primary' onClick={uploadPhoto}>Upload Photo</button>
    </div>
  )
}

export default Avatar