const { Router } = require("express");
const profileRouter = Router();
const profileController = require("../controllers/profileController");

profileRouter.get("/:id", profileController.getProfileData);

// profileRouter.get("/:id/delete", profileController.getDeleteMessage);
// profileRouter.delete("/:id/delete", profileController.deleteProfile);

module.exports = profileRouter;
