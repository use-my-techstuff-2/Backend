const knex = require('knex');

const knexFileConfig = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(knexFileConfig[dbEnv]);