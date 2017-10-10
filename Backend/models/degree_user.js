'use strict';
module.exports = function(sequelize, DataTypes) {
  var Degree_user = sequelize.define('Degree_user', {
    degree_id: DataTypes.STRING,
    user_id: DataTypes.STRING
  });
  
  return Degree_user;
};