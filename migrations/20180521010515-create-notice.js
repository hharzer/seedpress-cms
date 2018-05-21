'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Notices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      expires: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      frequency: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.ARRAY
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      churches: {
        type: Sequelize.ARRAY
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Notices');
  }
};
