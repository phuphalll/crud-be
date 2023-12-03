import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import logger from "@/utils/logger";

class MainController {
  healthCheck = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(HttpStatus.OK).send("Ok");
    } catch (e) {
      next(e);
    }
  };
  logError = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      logger.error("error from log error", _req.body);
      return res.sendStatus(HttpStatus.OK);
    } catch (e) {
      next(e);
    }
  };
}
export default MainController;
