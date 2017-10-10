'use strict';
module.exports = function(sequelize, DataTypes) {
  var Course_user = sequelize.define('Course_user', {
    user_id: DataTypes.STRING,
    course_id: DataTypes.STRING
  });
  
  return Course_user;
};