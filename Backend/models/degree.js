'use strict';
module.exports = function(sequelize, DataTypes) {
  var Degree = sequelize.define('Degree', {
    name: DataTypes.STRING
  });
  
  return Degree;
};