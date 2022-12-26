'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workouts', {
      workout_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      workout_user_id: {
        type: Sequelize.INTEGER,
        references:{model: 'users', key: 'user_id'}
      },
      workout_date: {
        type: Sequelize.DATE,
        allowNull:false
      },
      workout_muscle_group: {
        type: Sequelize.STRING,
        allowNull:true
      },
      workout_exercise: {
        type: Sequelize.STRING,
        allowNull:false
      },
      workout_sets: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      workout_reps: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      workout_weight: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      workout_duration: {
        type: Sequelize.STRING,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('workouts');
  }
};