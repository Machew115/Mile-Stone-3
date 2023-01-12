import React, { useState } from 'react';

function MealForm(props) {
    // Declare state variables to store the form data
    const [description, setDescription] = useState('');
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const date = new Date(props.selectedDate)
    date.setMinutes(30)

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
            meal_date: date,
        };

        // Send the new meal object to the server using a POST request
        fetch('http://localhost:5500/meals', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMeal),
        });

        // reload page after
        window.location.reload()
    };

    return (
        <div className="modal fade w-100 position-absolute top-50 start-50 translate-middle" id="form-modal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
            <div className="modal-dialog w-50">
                <div className="modal-content w-100">
                <div className="modal-header">
                    <h2 className="modal-title fs-5 fw-bold" id="formModalLabel">New Meal</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body w-100">
                    <form className="add-form w-50" onSubmit={handleSubmit}>
                        <div className='w-100 input-hold'>
                            <input
                                placeholder=' '
                                type="text"
                                id="description"
                                className="w-100 input_"
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <label htmlFor="description" className="fw-bold _label">Description:</label>
                        </div>
                        <br />
                        <div className='w-100 input-hold'>
                            <input
                                placeholder=' '
                                type="number"
                                id="calories"
                                className="w-100 input_"
                                onChange={(event) => setCalories(event.target.value)}
                            />
                            <label htmlFor="calories" className="fw-bold _label">Calories (kcal):</label>
                        </div>
                        <br />
                        <div className='w-100 input-hold'>
                            <input
                                placeholder=' '
                                type="number"
                                id="protein"
                                className="w-100 input_"
                                onChange={(event) => setProtein(event.target.value)}
                            />
                            <label htmlFor="protein" className="fw-bold _label">Protein (g):</label>
                        </div>
                        <br />
                        <div className='w-100 input-hold'>
                            <input
                                placeholder=' '
                                type="number"
                                id="fat"
                                className="w-100 input_"
                                onChange={(event) => setFat(event.target.value)}
                            />
                            <label htmlFor="fat" className="fw-bold _label">Fat (g):</label>
                        </div>
                        <br />
                        <div className='w-100 input-hold'>
                            <input
                                placeholder=' '
                                type="number"
                                id="carbs"
                                className="w-100 input_"
                                onChange={(event) => setCarbs(event.target.value)}
                            />
                            <label htmlFor="carbs" className="fw-bold _label">Carbs (g):</label>
                        </div>
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