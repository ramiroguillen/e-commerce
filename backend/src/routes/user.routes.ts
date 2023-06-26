import { Router, Request, Response } from "express";
import { Routes } from "../interfaces/route.interface";

class userRoute implements Routes {
  public path = "/user";
  public router = Router();

  constructor() {
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    //TODO: getAllUsers
    this.router.get(`${this.path}`, (_req: Request, res: Response) => {
      res.status(200).json({ message: "Get All Users" });
    });
    //TODO: getUserById
    this.router.get(`${this.path}/:id`, (req: Request, res: Response) => {
      const { id: userId } = req.params;
      res.status(200).json({ message: `Get User: ${userId}` });
    });
    //TODO: createUser
    this.router.post(`${this.path}`, (req: Request, res: Response) => {
      const { body: user } = req;
      res.status(200).json({ message: "User Created", user });
    });
    //TODO: updateUserById
    this.router.put(`${this.path}/:id`, (req: Request, res: Response) => {
      const { id: userId } = req.params;
      const { body: user } = req;
      res.status(200).json({ message: `User Updated: ${userId}`, user });
    });
    //TODO: deleteUserById
    this.router.delete(`${this.path}/:id`, (req: Request, res: Response) => {
      const { id: userId } = req.params;
      res.status(200).json({ message: `User Deleted: ${userId}` });
    });
  }
}

export default userRoute;
