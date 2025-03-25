const { Router } = require("express");
const movieRouter = Router();
const movieController = require("../controllers/movieController");

movieRouter.get("/", movieController.moviePage);

module.exports = movieRouter;
