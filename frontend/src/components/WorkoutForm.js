import React, { useState } from 'react';

function WorkoutForm(props) {
    // Declare state variables to store the form data 
    const [MuscleGroup, setMuscleGroup] = useState('');
    const [Exercise, setExercise] = useState('');
    const [Sets, setSets] = useState(0);
    const [Reps, setReps] = useState(0);
    const [Weight, setWeight] = useState(0);
    const [Duration, setDuration] = useState('');

    //Handle form submission
    const handleSubmit = (event) => {
        event.preventDafault();

    // create a new workout objects
    const newWorkout = {
        workout_muscle_group: MuscleGroup,
        workout_exercise: Exercise,
        workout_sets: Sets,
        workout_reps: Reps,
        workout_weight: Weight,
        workout_duration: Duration,
        workout_user_id: props.user_id,
        workout_date: props.selectedDate
    };
    //send the new workout object to the server with a Post request 
    fetch(`http://localhost:5500/workouts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWorkout),
    });

    // reload the page after
    window.location.reload()
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <label htmlFor="muscle Group">MuscleGroup:</label>
            <input
                type="text"
                id="Muscle Group"
                value={MuscleGroup}
                onChange={(event) => setMuscleGroup(event.target.value)}
            />
            <br />
            <label htmlFor="exercise">Exercise:</label>
            <input
                type="text"
                id="exercise"
                value={Exercise}
                onChange={(event) => setExercise(event.target.value)}
            />
            <br />
            <label htmlFor="sets">Sets:</label>
            <input
                type="number"
                id="Sets"
                value={Sets}
                onChange={(event) => setSets(event.target.value)}
            />
            <br />
            <label htmlFor="reps">Reps:</label>
            <input
                type="number"
                id="reps"
                value={Reps}
                onChange={(event) => setReps(event.target.value)}
            />
            <br />
            <label htmlFor="weight">Weight (lb):</label>
            <input
                type="number"
                id="weight"
                value={Weight}
                onChange={(event) => setWeight(event.target.value)}
            />
            <br />
            <label htmlFor="duration">Duration:</label>
            <input
                type="text"
                id="duration"
                value={Duration}
                onChange={(event) => setDuration(event.target.value)}
            />
            <br />
            <button type="submit" className='btn btn-secondary'>Add Workout</button>
        </form>
    );
};

export default WorkoutForm