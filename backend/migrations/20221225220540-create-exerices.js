'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exercises', {
      exercise_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      exercise_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      exercise_muscle_group: {
        type: Sequelize.STRING,
        allowNull: false
      },
      exercise_equipment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      exercise_description: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('exercises');
  }
};