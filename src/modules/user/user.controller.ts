import { Request, Response } from 'express';
import { UserService } from './user.service';
import { asyncHandler } from '../../utils/asyncHandler';
import { apiResponse } from '../../utils/apiResponse';

const userService = new UserService();

export const createUser = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    apiResponse(res, user, 'User created', 201);
  }
);

export const getUser = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await userService.getUser(req.params.id);
    apiResponse(res, user);
  }
);
