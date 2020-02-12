const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const dbconfig = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/curso_angular';
const sequelize = new Sequelize(dbconfig);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
