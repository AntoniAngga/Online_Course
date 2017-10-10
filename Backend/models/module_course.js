'use strict';
module.exports = function(sequelize, DataTypes) {
  var Module_course = sequelize.define('Module_course', {
    module_id: DataTypes.STRING,
    course_id: DataTypes.STRING
  });
  
  return Module_course;
};