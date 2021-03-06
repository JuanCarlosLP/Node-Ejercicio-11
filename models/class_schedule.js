'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class class_schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  class_schedule.init({
    schedule_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    day: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'class_schedule',
  });
  return class_schedule;
};