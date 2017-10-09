'use strict';
module.exports = function(sequelize, DataTypes) {
  var Degree = sequelize.define('Degree', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Degree;
};