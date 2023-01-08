import React, { useContext, useEffect, useState } from 'react';
import { CurrentUser } from '../context/CurrentUser';
import WorkoutEdit from '../components/WorkoutEdit';
import WorkoutForm from '../components/WorkoutForm';

function WorkoutLog() {
    // Declare state variables to store the selected date and the workout data
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [workouts, setworkout] = useState([]);
    const [editingWorkoutId, setEditingWorkoutId] = useState(null);
    const [display, setDisplay] = useState(false);
    const [addDisplay, setAddDisplay] = useState(false);

     // user context
     const {currentUser} = useContext(CurrentUser);
     useEffect(() => {
        if(currentUser) {
            // Fetch the workout data from the server and store it in the state
            async function fetchData() {
                const response = await fetch(`http://localhost:5500/workouts?workout_user_id=${currentUser.user.user_id}&workout_date=${selectedDate}`); // route subject to change depending on server route
                const data = await response.json();
                setworkout(data);
                
            }
            fetchData();
        }
     },[selectedDate, currentUser]);

     //Workout Delete request
     async function deleteWorkout(workoutId) {
        try {
            await fetch(`http://localhost:5500/workouts/${workoutId}`, {
                method: 'DELETE',
            });
            // After the Delete request is complete, reload page
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
     }

     // Group the workouts by date
    const groupedWorkouts = workouts.reduce((acc, workout) => {
        
        // use the toISOString method to convert the workout_date to a string in ISO format
        const date = selectedDate;

        // create a date string from the workout's date
        if (!acc[date]) {
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

    const displayForm = (workout) => {
        setEditingWorkoutId(workout);
        (display) ? setAddDisplay(false) : setDisplay(true)
    }

    const displayAddForm = () => {
        !addDisplay ? setAddDisplay(true) : setAddDisplay(false)
    }

    return (
        <div id="meal-log" className='table-responsive'>
            {/* Date picker to allow the user to select the date */}
            { currentUser ? <input className="px-2" type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} /> : null}
            {/* display the workout entries */}
            <table className='table caption-top mx-auto'>
                <caption>Workouts</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">MuscleGroup</th>
                        <th scope="col">Exercise</th>
                        <th scope="col">Sets</th>
                        <th scope="col">Reps</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Duration</th>
                    </tr>
                </thead>
                {displayedWorkouts.map((workout) => (
                    <tbody key={workout.workout_id}>
                        <tr>
                            <th scope='row'></th>
                            <td>{workout.workout_muscle_group}</td>
                            <td>{workout.workout_exercise}</td>
                            <td>{workout.workout_sets}</td>
                            <td>{workout.workout_reps}</td>
                            <td>{workout.workout_weight} (pounds)</td>
                            <td>{workout.workout_duration}</td>
                            <td onClick={() => displayForm(workout.workout_id)} className='btn btn-warning w-100'>Edit</td>
                            <td onClick={() => deleteWorkout(workout.workout_id)} className='btn btn-danger w-100'>Delete</td>
                        </tr>
                        {editingWorkoutId === workout.workout_id && display ? <WorkoutEdit workout={workout} /> : null}
                    </tbody>
                ))}
            </table>
            { !addDisplay && currentUser ? <button onClick={() => displayAddForm()} className='btn btn-secondary'> Add Workout </button>: currentUser ? <button onClick={() => displayAddForm()} className='btn btn-secondary'>-</button> : null}
            { addDisplay ? <WorkoutForm user_id = {currentUser.user.user_id} selectedDate = {selectedDate}/> : null}
        </div>
    );
}

export default WorkoutLog