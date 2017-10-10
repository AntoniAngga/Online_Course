'use strict';
var Chance = require('chance'),
  chance = new Chance();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      id: chance.string(),
      first_name: "Antoni",
      last_name: "Angga", 
      email: "antoniangga14@gmail.com",
      gender: "Male",
      linkedin_id: null,
      linkedin_token: null,
      github_id: null,
      github_token: null,
      facebook_id: null,
      facebook_token: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
