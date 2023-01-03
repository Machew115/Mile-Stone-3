import React, { useContext, useEffect, useState } from 'react';
import { CurrentUser } from '../context/CurrentUser';
import Navbar from '../components/Navbar';

function MealLog() {
    // Declare state variables to store the selected date and the meals data
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [meals, setMeals] = useState([]);
    
    // user context
    const currentUser = useContext(CurrentUser)

    useEffect(() => {
        // Fetch the meals data from the server and store it in the state
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/meals?meals_user_id=${currentUser.user_id}&date=${selectedDate}`); // route subject to change depending on server route
            const data = await response.json();
            setMeals(data);
        }
        fetchData();
    }, [selectedDate, currentUser.user_id]);
  
    // Group the meals by date
    const groupedMeals = meals.reduce((acc, meal) => {
        
        const date = meal.meal_date.toDateString();
        
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
    const displayedMeals = groupedMeals[selectedDate.toDateString()] || [];
  
    return (
        <div>
            <Navbar/>
            {/* Date picker to allow the user to select the date */}
            <input type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
            {/* display the meal entries */}
            {displayedMeals.map((meal) => (
            <div key={meal.meal_id}>
                <p>{meal.meal_description}</p>
                <p>Calories: {meal.meal_calories}</p>
                <p>Protein: {meal.protein}</p>
                <p>Fat: {meal.fat}</p>
                <p>Carbs: {meal.carbs}</p>
            </div>
            ))}
        </div>
    );
}

export default MealLog;