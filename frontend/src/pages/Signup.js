import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
//import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate= useNavigate()

    const [user, setUser] = useState({
        user_f_name: '',
        user_l_name:'',
        user_email: '',
        user_password: '',
    });

    async function handleSubmit(e){
        e.preventDefault();
        
        // Make a request to the server to create a new user
            await fetch(`http://localhost:5000/users/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        navigate(`/`);
    }
      
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="user_f_name">First Name:</label>
        <input
            type="text"
            name="user_f_name"
            id="user_f_name"
            value={user.user_f_name}
            onChange={e=>setUser({...user,user_f_name:e.target.value})}
        />
        <label htmlFor="user_l_name">Last Name:</label>
        <input
            type="text"
            name="user_l_name"
            id="user_l_name"
            value={user.user_l_name}
            onChange={e=>setUser({...user,user_l_name:e.target.value})}
        />
        <label htmlFor="user_email">Email:</label>
        <input
            type="text"
            name="user_email"
            id="user_email"
            value={user.user_email}
            onChange={e=>setUser({...user,user_email:e.target.value})}
        />
        <label htmlFor="user_password">Password:</label>
        <input
            type="text"
            name="user_password"
            id="user_password"
            value={user.user_password}
            onChange={e=>setUser({...user,user_password:e.target.value})}
        />
        <button type="submit">Sign up</button>
        </form>
    );
};

export default Signup;
