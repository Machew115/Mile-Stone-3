import React, { useState } from 'react';

function MealForm(props) {
    
    // Declare state variables to store the form data
    const [description, setDescription] = useState('');
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [carbs, setCarbs] = useState(0);

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
            meal_user_id: props.user_id,
            meal_date: props.selectedDate
        };

        // Send the new meal object to the server using a POST request
        fetch('http://localhost:5000/meals', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMeal),
        });

        // reload page after
        window.location.reload()
    };

    return (
        <div className="modal fade" id="form-modal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title fs-5 fw-bold" id="formModalLabel">New Meal</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className="add-form" onSubmit={handleSubmit}>
                        <label htmlFor="description" className="fw-bold">Description:</label>
                        <input
                            type="text"
                            id="description"
                            className="w-50"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <br />
                        <label htmlFor="calories" className="fw-bold">Calories:</label>
                        <input
                            type="number"
                            id="calories"
                            className="w-50"
                            value={calories}
                            onChange={(event) => setCalories(event.target.value)}
                        />
                        <br />
                        <label htmlFor="protein" className="fw-bold">Protein (g):</label>
                        <input
                            type="number"
                            id="protein"
                            className="w-50"
                            value={protein}
                            onChange={(event) => setProtein(event.target.value)}
                        />
                        <br />
                        <label htmlFor="fat" className="fw-bold">Fat (g):</label>
                        <input
                            type="number"
                            id="fat"
                            className="w-50"
                            value={fat}
                            onChange={(event) => setFat(event.target.value)}
                        />
                        <br />
                        <label htmlFor="carbs" className="fw-bold">Carbs (g):</label>
                        <input
                            type="number"
                            id="carbs"
                            className="w-50"
                            value={carbs}
                            onChange={(event) => setCarbs(event.target.value)}
                        />
                        <br />
                        <button type="submit" className='btn btn-secondary fw-bold'>Add Meal</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MealForm