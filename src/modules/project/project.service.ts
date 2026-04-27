import { Request } from "express";
import { serviceResponse } from "../../utils/apiResponse";
import { ProjectRepository } from "./project.repository";
import { title } from "process";
import paginate from "../../utils/paginate";
import { ProjectModel } from "./project.model";

type CreateProjectReq = { participantView: string; title: string };

const projectRepo = new ProjectRepository();

export class ProjectService {
  async createProject(userId: string, data: CreateProjectReq) {
    try {
      let projectExists = await projectRepo.findOne({
        userId,
        title: data.title,
      });

      if (projectExists) {
        return serviceResponse(
          false,
          "Project with the same title already exists. Please choose a different title."
        );
      }

      const project = await projectRepo.create({
        userId,
        title: data.title,
        participantView: data.participantView,
      });

      return serviceResponse(true, "Project created successfully.", project);
    } catch (error) {
      console.log(error);
      return serviceResponse(
        false,
        "Something went wrong. Please try again later"
      );
    }
  }
}
