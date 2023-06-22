import { Router, Request, Response } from "express";
import { Routes } from "../interfaces/route.interface";

class BaseRoute implements Routes {
  public path = "/alive";
  public router = Router();

  constructor() {
    this.initBaseRoutes();
  }

  /**
   * initBaseRoutes
   */
  public initBaseRoutes() {
    this.router.get(`${this.path}`, (_req: Request, res: Response) => {
      res.status(200).json({ message: "API is alive" });
    });
  }
}

export default BaseRoute;
