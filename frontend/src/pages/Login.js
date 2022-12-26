import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // import the useForm hook from react-hook-form
import { useHistory } from 'react-router-dom'; // import the useHistory hook from react-router-dom
import bcrypt from 'bcrypt'; // import the bcryptjs library for hashing passwords
import jwt from 'jsonwebtoken'; // import the jsonwebtoken library for generating and verifying JWTs

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm(); // use the useForm hook to get form input and validation functions
  const [errorMessage, setErrorMessage] = useState(''); // use the useState hook to store the error message state
  const history = useHistory(); // use the useHistory hook to get the browser history object

  // define the onSubmit function to handle the form submission
  const onSubmit = async data => {
    try {
      // send a login request to the server with the email and password
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      });

      // if the login is successful, the server will return a JWT
      if (response.ok) {
        const token = await response.text();
        // store the JWT in local storage
        localStorage.setItem('authToken', token);
        // use the history object to navigate to the dashboard page
        history.push('/dashboard');
      } else {
        // if the login is unsuccessful, set the error message state
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      // if an error occurs, set the error message state
      setErrorMessage('An error occurred while logging in');
    }
  };

  return (
    // use the handleSubmit function from the useForm hook to handle the form submission
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        ref={register({ required: true })} // use the register function from the useForm hook to register the email input
      />
      {errors.email && 'Email is required'} // display an error message if the email input is invalid

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        ref={register({ required: true })} // use the register function from the useForm hook to register the password input
      />
      {errors.password && 'Password is required'} // display an error message if the password input is invalid

      {errorMessage && <p>{errorMessage}</p>} // display the error message if it exists

      <input type="submit" value="Log in" />
    </form>
  );
};

export default LoginForm;
