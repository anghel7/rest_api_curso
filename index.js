const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const Sequelize = require('sequelize');

const db = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/curso_angular';

const sequelize = new Sequelize(db);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
