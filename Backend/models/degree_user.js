'use strict';
module.exports = function(sequelize, DataTypes) {
  var Degree_user = sequelize.define('Degree_user', {
    degree_id: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Degree_user;
};