const workoutRouter = require('express').Router()
const db = require('../models');

const{Workouts} = db

workoutRouter.get('/user/:id',async(req,res)=>{
    const userid = (req.params.id);
    const userWork = await Workouts.findAll({
        where: {workout_user_id: userid}
    })
    res.json(userWork)
})

workoutRouter.get('/user/:id/date/:date', async(req,res)=> {
    const userid = (req.params.id);
    const selectDate = (req.params.date);
    const userWork = await Workouts.findOne({
        where: {workout_user_id: userid},
        where: {workout_date: selectDate}
    })
    res.json(userWork)
})

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