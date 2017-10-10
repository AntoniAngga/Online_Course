'use strict';
var Chance = require('chance'),
  chance = new Chance();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Degrees', [{
      id : chance.string(),
      name : "Fullstack Devlopment",
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Degrees', null, {});
  }
};
