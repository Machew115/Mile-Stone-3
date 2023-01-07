import React, { useContext, useEffect, useState } from 'react';
import MealEdit from '../components/MealEdit';
import MealForm from '../components/MealForm';
import { CurrentUser } from '../context/CurrentUser';

function MealLog() {
    // Declare state variables to store the selected date and the meals data
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [meals, setMeals] = useState([]);
    const [editingMealId, setEditingMealId] = useState(null);
    const [display, setDisplay] = useState(false)
    const [addDisplay, setAddDisplay] = useState(false)

    // user context
    const {currentUser} = useContext(CurrentUser)

    useEffect(() => {
        if(currentUser) {
            // Fetch the meals data from the server and store it in the state
            async function fetchData() {
                const response = await fetch(`http://localhost:5000/meals?meal_user_id=${currentUser.user.user_id}&meal_date=${selectedDate}`); // route subject to change depending on server route
                const data = await response.json();
                setMeals(data);
            }
            fetchData();
        }
    }, [selectedDate, currentUser]);

    // Meal delete request 
    async function deleteMeal(mealId) {
        try {
            await fetch(`http://localhost:5000/meals/${mealId}`, {
                method: 'DELETE',
            });
            // After the DELETE request is completed, reload page
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    }
      

    // Group the meals by date
    const groupedMeals = meals.reduce((acc, meal) => {
        
        const date = selectedDate;

        // create a date string from the meal's date
        if (!acc[date]) {
            // if there is no key for the date in the accumulator object yet, create one
            acc[date] = [meal];
        } else {
            // if there is already a key for the date in the accumulator object, add the current meal to the array of meals at that key
            acc[date].push(meal);
        }

        // return the updated accumulator object
        return acc;
    }, {});
    // Use the selected date to filter the data being displayed
    const displayedMeals = groupedMeals[selectedDate] || [];

    const displayForm = (meal) => {
        setEditingMealId(meal);
        (display) ? setDisplay(false) : setDisplay(true)
    }

    const displayAddForm = () => {
        !addDisplay ? setAddDisplay(true) : setAddDisplay(false)
    }

    return (
        <div id="meal-log" className='table-responsive'>
            {/* Date picker to allow the user to select the date */}
            { currentUser ? <input className="px-2" type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} /> : null}
            {/* display the meal entries */}
            <table className='table caption-top mx-auto'>
                <caption>Meals</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Calories</th>
                        <th scope="col">Protein</th>
                        <th scope="col">Fat</th>
                        <th scope="col">Carbs</th>
                    </tr>
                </thead>
                {displayedMeals.map((meal) => (
                    <tbody key={meal.meal_id}>
                        <tr>
                            <th scope='row'></th>
                            <td>{meal.meal_description}</td>
                            <td>{meal.meal_calories} (Calories)</td>
                            <td>{meal.protein} (grams)</td>
                            <td>{meal.fat} (grams)</td>
                            <td>{meal.carbs} (grams)</td>
                            <td onClick={() => displayForm(meal.meal_id)} className='btn btn-warning w-100'>Edit</td>
                            <td onClick={() => deleteMeal(meal.meal_id)} className='btn btn-danger w-100'>Delete</td>
                        </tr>
                        {editingMealId === meal.meal_id && display ? <MealEdit meal={meal} /> : null}
                    </tbody>
                ))}
            </table>
            { !addDisplay && currentUser ? <button onClick={() => displayAddForm()} className='btn btn-secondary'> Add Meal </button>: currentUser ? <button onClick={() => displayAddForm()} className='btn btn-secondary'>-</button> : null}
            { addDisplay ? <MealForm user_id = {currentUser.user.user_id} selectedDate = {selectedDate}/> : null}
        </div>
    );
}  

export default MealLog