import express from "express";
import { NODE_ENV, PORT } from "./config/config";

const app = express();

app.listen(PORT, () => {
  console.log("🚀 ~ file: index.ts:7 ~ app.listen ~ NODE_ENV:", NODE_ENV);
  console.log("🚀 ~ file: index.ts:8 ~ app.listen ~ PORT:", PORT);
});
