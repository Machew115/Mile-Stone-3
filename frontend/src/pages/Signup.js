import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        // Make a request to the server to create a new user
        const response = await fetch('/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
            'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (response.ok) {
            // Navigate to the login page if the request was successful
            navigate('/');
        } else {
            // Set an error message if the request was unsuccessful
            setError(data.message);
        }
        } catch (error) {
        setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
        />
        <button type="submit">Sign up</button>
        </form>
    );
};

export default Signup;
