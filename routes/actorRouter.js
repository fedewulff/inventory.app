const { Router } = require("express");
const actorRouter = Router();
const actorController = require("../controllers/actorController");

actorRouter.get("/", actorController.actorPage);
actorRouter.post("/", actorController.actorPagePost);

module.exports = actorRouter;
