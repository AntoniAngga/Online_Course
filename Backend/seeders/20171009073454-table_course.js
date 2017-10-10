'use strict';
var Chance = require('chance'),
  chance = new Chance();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Courses', [{
      id: chance.string(),
      name: "Front End",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: chance.string(),
      name: "Back End",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
