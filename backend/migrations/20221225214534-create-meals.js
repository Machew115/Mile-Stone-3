'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meals', {
      meal_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },  
       meal_user_id: {
        type: Sequelize.INTEGER,
        references:{model:'users',key: 'user_id'},
        allowNull:false
      },
      meal_date: {
        type: Sequelize.DATE,
        allowNull:false
      },
      meal_description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      meal_calories: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      protein: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      fat: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      carbs: {
        type: Sequelize.INTEGER,
        allowNull:true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meals');
  }
};