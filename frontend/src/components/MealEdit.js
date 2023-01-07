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
        <tr>
            <th scope='row'></th>
            <td>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </td>
            <td>
                <input
                    className='w-50'
                    type="number"
                    id="calories"
                    value={calories}
                    onChange={(event) => setCalories(event.target.value)}
                />
            </td>
            <td>
                <input
                    className='w-50'
                    type="number"
                    id="protein"
                    value={protein}
                    onChange={(event) => setProtein(event.target.value)}
                />
            </td>
            <td>
                <input
                    className='w-50'
                    type="number"
                    id="fat"
                    value={fat}
                    onChange={(event) => setFat(event.target.value)}
                />
            </td>
            <td>
                <input
                    className='w-50'
                    type="number"
                    id="carbs"
                    value={carbs}
                    onChange={(event) => setCarbs(event.target.value)}
                />
            </td>
            <td onClick={handleSubmit} className='btn btn-secondary w-100' id='save-btn'>Save</td>
        </tr>
    )

}

export default MealEdit