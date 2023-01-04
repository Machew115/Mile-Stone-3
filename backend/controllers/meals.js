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

mealsRouter.post('/user/:id/create', (req, res)=> {
       const meal_user_id = Number(req.params.id);
       const meal_date = req.body.meal_date;
       const meal_description = req.body.meal_description;
       const meal_calories = req.body.meal_calories;
       const protein = req.body.protein;
       const fat = req.body.fat;
       const carbs = req.body.carbs;
       const newMeal =  new Meals({
              meal_user_id,
              meal_date,
              meal_description,
              meal_calories,
              protein,
              fat,
              carbs
       });
       newMeal.save();
       res.send("boom")
})

mealsRouter.put('/user/:id/edit', async(req,res)=>{
       const id = (req.body.meal_id)
       const userMeal = await Meals.findByPk(id)
       userMeal.meal_description = req.body.meal_description;
       userMeal.meal_calories = req.body.meal_calories;
       userMeal.protein = req.body.protein;
       userMeal.fat = req.body.fat;
       userMeal.carbs = req.body.carbs;
       userMeal.save()
       res.send('success')

})

mealsRouter.delete('/user/:id/meal_id/:meal_id/delete', (req,res) => {
       const id = (req.params.meal_id)
       Meals.destroy({
              where: {meal_id : id}
       })
       res.send('nice')
})

module.exports = mealsRouter