require('dotenv').config();
require('@babel/register');
const path = require('path');
const express = require('express');

const ReactDomServer = require('react-dom/server');
const React = require('react');

const { sequelize } = require('./db/models');

const Home = require('./views/Home')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public/')));

app.get('/', (req, res) => {
  const reactEl = React.createElement(Home, null);
  const html = ReactDomServer.renderToStaticMarkup(reactEl);
  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
});

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Ok');
  } catch (error) {
    console.log(error, 'Fack');
  }
});
