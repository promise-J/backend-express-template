import { Request, Response } from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import { apiFailureResponse, apiSuccessResponse } from '../../utils/apiResponse';
import { ProjectService } from './project.service';

const projectService = new ProjectService();

export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id || "";
    const response = await projectService.createProject(userId, req.body);
    if(!response.success){
      return apiFailureResponse(res, response.message);
    }
    return apiSuccessResponse(res, response.message, response.data, 201);
  }
);


