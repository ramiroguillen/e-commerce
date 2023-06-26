import express from "express";
import displayRoutes from "express-routemap";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import hpp from "hpp";
import cors from "cors";
import helmet from "helmet";

import { API_VERSION, LOG_FORMAT, NODE_ENV, PORT } from "./config/config";
import { Routes } from "./interfaces/route.interface";
import { logger, stream } from "./utils/logger";
import corsConfig from "./config/cors.config";

class App {
  public app: express.Application;
  public env: string;
  public port: number;
  public server: any;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = Number(PORT) || 8000;

    this.connectToDatabase();
    this.initMiddlewares();
    this.initRoutes(routes);
    this.initSwagger();
    this.initErrorHandling();
  }

  /**
   * getServer
   */
  public getServer() {
    return this.app;
  }

  /**
   * closeServer
   */
  public closeServer(done?: any) {
    this.server = this.app.listen(this.port, () => {
      done();
    });
  }

  /**
   * connectToDatabase
   */
  private connectToDatabase() {
    //TODO: init DB connection
  }

  /**
   * initMiddlewares
   */
  public initMiddlewares() {
    this.app.use(morgan(LOG_FORMAT ?? "../logs", { stream }));
    this.app.use(cors(corsConfig));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
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
   * initErrorHandling
   */
  public initErrorHandling() {
    //TODO: config error handling
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

  /**
   * initSwagger
   */
  private initSwagger() {
    //TODO: init swagger
  }
}

export default App;
