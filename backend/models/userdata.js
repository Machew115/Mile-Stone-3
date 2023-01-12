'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Userdata.init({
    data_id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    data_user_id:{ 
      type:DataTypes.INTEGER,
      references:{model:'users',key: 'user_id'},
      allowNull:false
    },
    data_start_date: {
      type:DataTypes.DATE,
      allowNull:true,
      defaultValue: new Date()
    },
    data_current_date:{
      type:DataTypes.DATE,
      allowNull:true,
      defaultValue: new Date()
    },
    data_start_weight: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_weight:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_waist: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_waist:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_chest: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_chest:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_shoulders:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_shoulders:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_biceps: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_biceps: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_thighs:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_thighs:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_calves:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_calves:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'Userdata',
    tableName: 'userdata',
    timestamps: false
  });
  return Userdata;
};