import { version } from "../../package.json";
import { Router } from "express";
import { authMdw } from "../middleware/auth.mdw";

import auth from "./auth";


/**
 * API Resources
 */
export default () => {
  let api = Router();

  api.get("/", (req, res) => {
    res.json({
      version,
    });
  });

  api.use("/auth", auth);

  return api;
};
