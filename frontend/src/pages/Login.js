import { useEffect, useState, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from '../context/CurrentUser'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // Declare a state variable for the checkbox and set its initial value to false
    const [showPassword, setShowPassword] = useState(false);
    const { setCurrentUser } = useContext(CurrentUser);


    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        try {
        // send a request to the server to verify the email and password
        const response = await fetch('http://localhost:5500/authentication/', { // to be changed to server route.
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.status === 200) {
            const user = await response.json();
            setCurrentUser(user);
            // navigate to the home page if login was successful
            navigate('/');
        } else {
            console.log(response) // test
            // display an error message if login failed
            setError('Invalid email or password');
        }
        } catch (error) {
        setError(error.message);
        }
    }, [email, password, navigate, setCurrentUser]);

    useEffect(() => {
        // clear the error message when the email or password changes
        setError(null);
    }, [email, password]);

    return (
        <form>
        {error && <p>{error}</p>}
        <label>
            Username:
            <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
        </label>
        <br />
        <label>
            Password:
            {/* Use a ternary operator to conditionally render the password input field based on the value of the showPassword state variable */}
            <input 
            type={showPassword ? "text" : "password"} 
            name="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
        </label>
        <br />
        {/* Add a checkbox input field and bind it to the showPassword state variable */}
        <input type="checkbox" checked={showPassword} onChange={e => setShowPassword(e.target.checked)} />
        Show Password
        
        <button type="submit" onClick={handleSubmit}>Log in</button>
        </form>
    );
}

export default Login;
