var Sequelize = require('sequelize');
dbName = 'tripplanner'

var db = new Sequelize(dbName, 'bpr', 'sunshine', {
  dialect: 'postgres',
  port: 5432,
  logging: false
});

module.exports = db;
