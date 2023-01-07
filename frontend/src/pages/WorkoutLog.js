import React, { useContext, useEffect, useState } from 'react';
import { CurrentUser } from '../context/CurrentUser';

function WorkoutLog() {
    // Declare state variables to store the selected date and the workout data
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [workouts, setworkout] = useState([]);

     // user context
     const {currentUser} = useContext(CurrentUser);
     useEffect(() => {
        if(currentUser) {
            // Fetch the workout data from the server and store it in the state
            async function fetchData() {
                const response = await fetch(`http://localhost:5500/workouts?workout_user_id=${currentUser.user.user_id}&workout_date=${selectedDate}`); // route subject to change depending on server route
                const data = await response.json();
                setworkout(data);
                console.log(data)
            }
            fetchData();
        }
     },[selectedDate, currentUser]);

     // Group the workouts by date
    const groupedWorkouts = workouts.reduce((acc, workout) => {
        
        // use the toISOString method to convert the workout_date to a string in ISO format
        const date = selectedDate;

        // create a date string from the workout's date
        if (!acc[date]) {
            console.log('test')
            // if there is no key for the date in the accumulator object yet, create one
            acc[date] = [workout];
        } else {
            // if there is already a key for the date in the accumulator object, add the current workout to the array of workouts at that key
            acc[date].push(workout);
        }

        // return the updated accumulator object
        return acc;
    }, {});

    // Use the selected date to filter the data being displayed
    const displayedWorkouts = groupedWorkouts[selectedDate] || [];

    return (
        <div>
            {/* Date picker to allow the user to select the date */}
            <input type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
            {/* display the meal entries */}
            {displayedWorkouts.map((workout) => (
            <div key={workout.workout_id}>
                <p>Muscle Group: {workout.workout_workout_muscle_group}</p>
                <p>Exercise: {workout.workout_exercise}</p>
                <p>Sets: {workout.workout_sets}</p>
                <p>Reps: {workout.workout_reps}</p>
                <p>Weight: {workout.workout_weight}</p>
                <p>Duration: {workout.workout_duration}</p>
                <p>Time: {selectedDate}</p>
            </div>
            ))}
        </div>
    );
}

export default WorkoutLog