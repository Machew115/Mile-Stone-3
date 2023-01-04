import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { CurrentUser } from '../context/CurrentUser';

function MealForm() {

    const navigate = useNavigate()
    
    // Declare state variables to store the form data
    const [description, setDescription] = useState('');
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [carbs, setCarbs] = useState(0);

    // Get the current user from the context
    const { currentUser } = useContext(CurrentUser);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new meal object
        const newMeal = {
            meal_description: description,
            meal_calories: calories,
            protein: protein,
            fat: fat,
            carbs: carbs,
            meal_user_id: currentUser.user.user_id,
            meal_date: new Date(),
        };

        // Send the new meal object to the server using a POST request
        fetch('http://localhost:5000/meals', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMeal),
        });

        // navigate to meals after
        navigate('/meals')
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <br />
            <label htmlFor="calories">Calories:</label>
            <input
                type="number"
                id="calories"
                value={calories}
                onChange={(event) => setCalories(event.target.value)}
            />
            <br />
            <label htmlFor="protein">Protein (g):</label>
            <input
                type="number"
                id="protein"
                value={protein}
                onChange={(event) => setProtein(event.target.value)}
            />
            <br />
            <label htmlFor="fat">Fat (g):</label>
            <input
                type="number"
                id="fat"
                value={fat}
                onChange={(event) => setFat(event.target.value)}
            />
            <br />
            <label htmlFor="carbs">Carbs (g):</label>
            <input
                type="number"
                id="carbs"
                value={carbs}
                onChange={(event) => setCarbs(event.target.value)}
            />
            <br />
            <button type="submit" className='btn btn-secondary'>Add Meal</button>
        </form>
    );
};

export default MealForm