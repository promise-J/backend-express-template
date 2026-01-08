import { Router } from 'express';
import { createUser, getUser } from './user.controller';

const router = Router();

router.post('/', createUser);
router.get('/:id', getUser);

export default router;
