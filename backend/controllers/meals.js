const mealsRouter = require('express').Router()
const { request } = require('express')
const db = require('../models/')
const{Meals} = db

mealsRouter.get('/user/:id', async(req,res)=>{
       let userid = Number(req.params.id)
       const userMeals = await Meals.findAll({
              where: {meal_user_id: userid},
       }) 
       res.json(userMeals)
})

mealsRouter.get('/user/:id/date/:date',async(req,res)=>{
           let userid = Number(req.params.id)
           let selectDate = (req.params.date)
           console.log("this hit me",userid,selectDate)
           const userMeal = await Meals.findOne({
                  where: {meal_user_id: userid},
                  where: {meal_date: selectDate}
           }) 
           console.log("this is what you get", userMeal)
           res.json(userMeal)
      })

//mealsRouter.post('/user/:id/date/:date', async(req,res)=>{
       //let userid = Number(req.params.id)
       //let selectDate = (req.params.date)
      // const userMeal = await Meals.findOne({
       //       where: {meal_user_id: userid},
       //       where: {meal_date: selectDate}
      // })
      // if (!userMeal) {
     //         res.status(404).send("data is not found");
      // }
      // else {
       //       userMeal.meal_description.
      //        userMeal.protein
       //       userMeal.fat
       //       userMeal.carbs
      // }

//})

module.exports = mealsRouter