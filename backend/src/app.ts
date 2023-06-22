import express from "express";
import { API_VERSION, NODE_ENV, PORT } from "./config/config";
import { Routes } from "./interfaces/route.interface";
import { logger } from "./utils/logger";
import displayRoutes from "express-routemap";

class App {
  public app: express.Application;
  public env: string;
  public port: number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = Number(PORT) || 8000;
    this.initRoutes(routes);
  }

  /**
   * initRoutes
   */
  public initRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(`/api/${API_VERSION}`, route.router);
    });
  }

  /**
   * listen
   */
  public listen() {
    this.app.listen(this.port, () => {
      displayRoutes(this.app);
      logger.info(`🚀 ~ App ENV: ${this.env}`);
      logger.info(`🚀 ~ App PORT: ${this.port}`);
    });
  }
}

export default App;
