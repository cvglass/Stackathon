const db = require('../index');
const Sequelize = require('sequelize')

const User = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
})

module.exports = User;