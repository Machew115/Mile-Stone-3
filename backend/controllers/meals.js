const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');


// get all meals for the specified user and date
router.get('/', async (req, res) => {
    try {
        // get the user id and date from the query string
        const { meal_user_id, meal_date } = req.query;
        
        // Convert the meal_date string to a Date object
        const startDate = new Date(meal_date);
    
        // Set the day of the month for the end date to be the day after the start date
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 1);
    
        // find all meals that match the user id and date
        const meals = await db.Meals.findAll({
            where: {
            meal_user_id: meal_user_id,
            meal_date: {
                [Op.between]: [startDate, endDate]
            }
            }
        });
        
        // send the meals data as a response
        res.json(meals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});
  

module.exports = router;
