const express = require('express');
const lauchesController = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', lauchesController.httpGetAllLaunches);
launchesRouter.post('/', lauchesController.httpAddNewLaunch);
launchesRouter.delete('/:id', lauchesController.httpAbortLaunch);

module.exports = launchesRouter;
