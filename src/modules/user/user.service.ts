import bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';

const userRepo = new UserRepository();

export class UserService {
  async createUser(data: any) {
    const exists = await userRepo.findByEmail(data.email);
    if (exists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return userRepo.create({
      ...data,
      password: hashedPassword,
    });
  }

  async getUser(id: string) {
    const user = await userRepo.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}
