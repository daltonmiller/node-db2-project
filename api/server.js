const express = require('express');
const CarsRouter = require('../data/cars-router');

const db = require('../data/config');

const server = express();

server.use(express.json());
server.use('/api/cars', CarsRouter)
module.exports = server;