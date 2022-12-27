import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // Declare a state variable for the checkbox and set its initial value to false
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        try {
        // send a request to the server to verify the username and password
        const response = await fetch('/', { // to be changed to server route.
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            // navigate to the home page if login was successful
            navigate('/');
        } else {
            // display an error message if login failed
            setError('Invalid username or password');
        }
        } catch (error) {
        setError(error.message);
        }
    }, [username, password, navigate]);

    useEffect(() => {
        // clear the error message when the username or password changes
        setError(null);
    }, [username, password]);

    return (
        <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <label>
            Username:
            <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
        
        <button type="submit">Log in</button>
        </form>
    );
}

export default Login;
