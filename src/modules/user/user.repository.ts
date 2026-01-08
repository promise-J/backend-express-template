import { UserModel } from './user.model';

export class UserRepository {
  create(data: any) {
    return UserModel.create(data);
  }

  findByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  findById(id: string) {
    return UserModel.findById(id);
  }
}
