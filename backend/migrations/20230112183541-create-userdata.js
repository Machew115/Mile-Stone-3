'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userdata', {
      data_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      data_user_id:{ 
        type:Sequelize.INTEGER,
        references:{model:'users',key: 'user_id'},
        allowNull:false
      },
      data_start_date: {
        type:Sequelize.DATE,
        allowNull:true,
        defaultValue: new Date()
      },
      data_current_date:{
        type:Sequelize.DATE,
        allowNull:true,
        defaultValue: new Date()
      },
      data_start_weight: {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_current_weight:  {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_start_waist: {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_current_waist:  {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_start_chest: {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_current_chest:  {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_start_shoulders:  {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_current_shoulders:  {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_start_biceps: {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_current_biceps: {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_start_thighs:  {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_current_thighs:  {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_start_calves:  {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
      data_current_calves:  {
        type:Sequelize.DECIMAL(5,2),
        allowNull:true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userdata');
  }
};