// import ApplicationController from "@/controllers/ApplicationController";
// import Middleware from "@/controllers/Middleware";
import { Router } from "express";
import MainController from "../controllers/mainController";

class Main {
  path = "/";
  router = Router();
  mainController = new MainController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.mainController.healthCheck);
    this.router.post("/", this.mainController.logError);
  }
}

export default Main;
