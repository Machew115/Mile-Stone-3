import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from '../context/CurrentUser'

function Login() {
    const { setCurrentUser } = useContext(CurrentUser);
    const[credentials,setCredentials]= useState({
        user_email:'',
        user_password: ''
    })
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // Declare a state variable for the checkbox and set its initial value to false
    const [showPassword, setShowPassword] = useState(false);   

    useEffect(() => {
        const input = document.querySelector('input');

        input.addEventListener('focus', () => {
        input.classList.add('focused');
        });

        input.addEventListener('blur', () => {
        input.classList.remove('focused');
        });

    }, []);


    async function handleSubmit(e) {
        e.preventDefault();
                // send a request to the server to verify the email and password
        const response = await fetch('http://localhost:5500/authentication', { // to be changed to server route.
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (response.status === 200) {
            setCurrentUser(data.user);
            localStorage.setItem('token',data.token)
            // navigate to the home page if login was successful
           navigate(`/profile`);

        } else {
            // display an error message if login failed
            setError('Invalid email or password');
        }
        
    };

    useEffect(() => {
        // clear the error message when the email or password changes
        setError(null);
    }, [credentials.user_email, credentials.user_password]);

    return (
        <form>
        {error && <p>{error}</p>}
        <label htmlFor='user_email'>Username (user your email address): </label>
            <input
            type="text"
            required
            placeholder='email'
            name = 'user_email'
            id='user_email'
            value={credentials.user_email}
            onChange={(event) => setCredentials({...credentials,user_email:event.target.value})}
            />
        
        <br />
        <label htmlFor='user_password'> Password: </label>
        <input 
            type={showPassword ? "text" : "password"} 
            required
            placeholder='password'
            name="user_password"
            id='user_password' 
            value={credentials.user_password}
            onChange={(event) => setCredentials({...credentials,user_password:event.target.value})}
            />
 
        <br />
        {/* Add a checkbox input field and bind it to the showPassword state variable */}
        <input type="checkbox" checked={showPassword} onChange={e => setShowPassword(e.target.checked)} />
        Show Password
        
        <button type="submit" onClick={handleSubmit}>Log in</button>
        </form>
    );
}

export default Login;
