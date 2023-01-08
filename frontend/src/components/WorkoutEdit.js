import React, { useState } from 'react';

function WorkoutEdit({ workout }) {
    // Declare state variables to store the form data 
    const [MuscleGroup, setMuscleGroup] = useState(workout.workout_muscle_group);
    const [Exercise, setExercise] = useState(workout.workout_exercise);
    const [Sets, setSets] = useState(workout.workout_sets);
    const [Reps, setReps] = useState(workout.workout_reps);
    const [Weight, setWeight] = useState(workout.workout_weight);
    const [Duration, setDuration] = useState(workout.workout_duration);
    
    //Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

    // create a new workout objects
    const newWorkoutData = {
        workout_muscle_group: MuscleGroup,
        workout_exercise: Exercise,
        workout_sets: Sets,
        workout_reps: Reps,
        workout_weight: Weight,
        workout_duration: Duration,
    };

    //send the new workout object to the server with a Post request 
    fetch(`http://localhost:5500/workouts/${workout.workout_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWorkoutData),
    });

    // reload page after
    window.location.reload()
};

        return(
            <tr>
            <th scope='row'></th>
            <td>
                <input
                    className='w-50'
                    type="text"
                    id="Muscle Group"
                    value={MuscleGroup}
                    onChange={(event) => setMuscleGroup(event.target.value)}
                />
            </td>
            <td>
                <input
                    className='w-50'
                    type="text"
                    id="exercise"
                    value={Exercise}
                    onChange={(event) => setExercise(event.target.value)}
                />
            </td>
            <td>
                <input
                    className='w-50'
                    type="number"
                    id="sets"
                    value={Sets}
                    onChange={(event) => setSets(parseInt(event.target.value))}
                />
            </td>
            <td>
                <input
                    className='w-50'
                    type="number"
                    id="reps"
                    value={Reps}
                    onChange={(event) => setReps(parseInt(event.target.value))}
                />
            </td>
            <td>
                <input
                    className='w-50'
                    type="number"
                    id="weight"
                    value={Weight}
                    onChange={(event) => setWeight(parseInt(event.target.value))}
                />
            </td>
            <td>
                <input
                    className='w-50'
                    type="text"
                    id="duration"
                    value={Duration}
                    onChange={(event) => setDuration(event.target.value)}
                />
            </td>
            <td onClick={handleSubmit} className='btn btn-secondary w-100' id='save-btn'>Save</td>
        </tr>
        )

    }

export default WorkoutEdit