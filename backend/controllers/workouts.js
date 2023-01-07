const workoutRouter = require('express').Router()
const db = require('../models');
const { Op } = require('sequelize');

const{Workouts} = db


workoutRouter.get('/', async(req,res)=> {
    console.log(req.query)
    try {
        //get user id and date from query string
        const { workout_user_id, workout_date } = req.query;

        //convert the workout_date string to a Date object
        const startDate = new Date(workout_date);

        //set the day of the month for the end date to be the day after the start date
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 1);

        //find all meals that match user id and date
        const workouts = await Workouts.findAll({
            where: {
                workout_user_id: workout_user_id,
                workout_date: {
                    [Op.between]: [startDate, endDate]
                }
                }
        });

        //send the workou data as a response
        res.json(workouts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred'})
    }
});

workoutRouter.post('/user/:id/create', async(req,res) => {
    const workout_user_id = (req.params.id)
    const workout_date = req.body.workout_date;
    const workout_muscle_group = req.body.workout_muscle_group;
    const workout_exercise = req.body.workout_exercise;
    const workout_sets = req.body.workout_sets;
    const workout_reps = req.body.workout_reps;
    const workout_weight = req.body.workout_weight;
    const workout_duration = req.body.workout_duration;
    const newWorkout = new Workouts({
        workout_user_id,
        workout_date,
        workout_muscle_group,
        workout_exercise,
        workout_sets,
        workout_reps,
        workout_weight,
        workout_duration
    });
    newWorkout.save();
    res.send("success")
})

workoutRouter.put('/user/:id/edit', async(req,res) =>{
    const id = (req.body.workout_id)
    const userWork = await Workouts.findByPk(id)
    userWork.workout_muscle_group = req.body.workout_muscle_group;
    userWork.workout_exercise = req.body.workout_exercise;
    userWork.workout_sets = req.body.workout_sets;
    userWork.workout_reps = req.body.workout_reps;
    userWork.workout_weight = req.body.workout_weight;
    userWork.workout_duration = req.body.workout_duration;
    userWork.save()
    res.send('success')
})

workoutRouter.delete('/user/:id/workout_id/:workout_id/delete', (req,res) => {
    const id = (req.params.workout_id)
    Workouts.destroy({
        where: {workout_id: id}
    })
    res.send('success')
})

module.exports = workoutRouter