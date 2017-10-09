'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    linkedin_id: DataTypes.STRING,
    linkedin_token: DataTypes.STRING,
    github_id: DataTypes.STRING,
    github_token: DataTypes.STRING,
    facebook_id: DataTypes.STRING,
    facebook_token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};