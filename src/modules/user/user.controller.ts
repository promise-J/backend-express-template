import { Request, Response } from 'express';
import { UserService } from './user.service';
import { asyncHandler } from '../../utils/asyncHandler';
import { apiFailureResponse, apiSuccessResponse } from '../../utils/apiResponse';

const userService = new UserService();

export const createUser = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id || "";
    const response = await userService.createUser(userId, req.body);
    if(!response.success){
      return apiFailureResponse(res, response.message);
    }
    return apiSuccessResponse(res, response.message, response.data, 201);
  }
);
