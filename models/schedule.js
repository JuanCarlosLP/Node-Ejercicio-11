'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsToMany(models.schedules, {
          through: "schedules",
          foreignKey: "id"
        })
        
        this.belongsTo(models.classes, {
          foreignKey: "class_id"
        });
    }
  };
  schedule.init({
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'schedule',
  });
  return schedule;
};