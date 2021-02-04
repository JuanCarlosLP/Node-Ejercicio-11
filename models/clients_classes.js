'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clients_classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.clients, {
        foreignKey: "client_id"
      });

      this.belongsTo(models.classes, {
        foreignKey: "class_id"
      });
    }
  };
  clients_classes.init({
    client_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clients_classes',
  });
  return clients_classes;
};