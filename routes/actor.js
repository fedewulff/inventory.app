const { Router } = require("express");
const actorRouter = Router();
const actorController = require("../controllers/actorController");

actorRouter.get("/", actorController.actorPage);

module.exports = actorRouter;
