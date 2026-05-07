import bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';
import { serviceResponse } from '../../utils/apiResponse';

const userRepo = new UserRepository();
type CreateUserRequest = { participantView: string; title: string };


export class UserService {
  async createUser(userId: string, data: CreateUserRequest) {
    try {
      let projectExists = await userRepo.findOne({
        userId,
        title: data.title,
      });

      if (projectExists) {
        return serviceResponse(
          false,
          "Project with the same title already exists. Please choose a different title."
        );
      }

      const project = await userRepo.create({
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
