'use strict';
var Chance = require('chance'),
  chance = new Chance();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Modules',[{
      id: chance.string(),
      name: "Sql Lite",
      createdAt: new Date(),
      updatedAt: new Date()
    } , {
      id: chance.string(),
      name: "Sequelize",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: chance.string(),
      name: "Node Js",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: chance.string(),
      name: "React",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: chance.string(),
      name: "Redux",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: chance.string(),
      name: "Vue.Js",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: chance.string(),
      name: "Vuex",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Modules', null, {});
  }
};
