'use strict';
module.exports = function(sequelize, DataTypes) {
  var Module = sequelize.define('Module', {
    name: DataTypes.STRING
  });
  
  return Module;
};