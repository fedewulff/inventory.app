const { Router } = require("express");
const movieRouter = Router();
const movieController = require("../controllers/movieController");

movieRouter.get("/", movieController.moviePage);
movieRouter.post("/", movieController.moviePagePost);

module.exports = movieRouter;
