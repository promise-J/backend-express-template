import { Router } from 'express';
import { createUser } from './user.controller';
import { ROUTE_AUTH_REGISTER } from '../../utils/page-routes';
import { validate } from '../../middlewares/validate';
import { createUserSchema } from './user.validation';
import { authMiddleware } from '../../middlewares/auth.middleware';

const router = Router();

router.post(ROUTE_AUTH_REGISTER, validate(createUserSchema), authMiddleware, createUser);


export default router;
