'use strict';
module.exports = function(sequelize, DataTypes) {
  var Degree_course = sequelize.define('Degree_course', {
    degree_id: DataTypes.STRING,
    course_id: DataTypes.STRING
  }); 
  
  return Degree_course;
};