import { Router } from "express";

import controllers from "../controllers";

const tutorialRouter = Router();

tutorialRouter
  .route("/")
  .get(controllers.Tutorial.getTutorials)
  .post(controllers.Tutorial.createTutorial);

tutorialRouter
  .route("/:id")
  .get(controllers.Tutorial.getTutorial)
  .put(controllers.Tutorial.updateTutorial)
  .delete(controllers.Tutorial.deleteTutorial);

export default tutorialRouter;
