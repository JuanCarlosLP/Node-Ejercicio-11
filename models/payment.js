'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.clients, {
        foreignKey: "client_id"
      });
      this.belongsTo(models.memberships, {
        foreignKey: "membership_id"
      });

    }
  };
  payment.init({
    membership_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'payment',
  });
  return payment;
};