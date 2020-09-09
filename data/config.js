const knex = require('knex');

const env = process.env.NODE_ENV || 'development';

const config = require('../knexfile');

const configOptions = config;

module.exports = knex(configOptions);