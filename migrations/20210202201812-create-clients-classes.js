'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients_classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "clients",
          key: "id"
        }
      },
      class_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "classes",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clients_classes');
  }
};