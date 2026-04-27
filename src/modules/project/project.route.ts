import { Router } from "express";

import { validate } from "../../middlewares/validate";
import {
  ROUTE_CREATE_PROJECT,
} from "../../utils/page-routes";

import { createProjectSchema } from "./project.validation";
import { createProject } from "./project.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.post(ROUTE_CREATE_PROJECT, validate(createProjectSchema), authMiddleware, createProject);



export default router;
