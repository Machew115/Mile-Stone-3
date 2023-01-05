import React, { useState } from 'react';

function MealEdit({ meal }) {

    // Declare state variables to store the form data
    const [description, setDescription] = useState(meal.meal_description);
    const [calories, setCalories] = useState(meal.meal_calories);
    const [protein, setProtein] = useState(meal.protein);
    const [fat, setFat] = useState(meal.fat);
    const [carbs, setCarbs] = useState(meal.carbs);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new meal object
        const newMealData = {
            meal_description: description,
            meal_calories: calories,
            protein: protein,
            fat: fat,
            carbs: carbs,
        };

        // Send the new meal object to the server using a POST request
        fetch(`http://localhost:5000/meals/${meal.meal_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMealData),
        });

        // reload page after
        window.location.reload()
    };


    return(
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
            <button type="submit" className='btn btn-secondary'>Save</button>
        </form>
    )

}

export default MealEdit