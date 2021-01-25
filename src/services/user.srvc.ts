import { User } from '../models/user';
import UserRepository, { UserType } from '../schemas/user.schema';
import { Types } from 'mongoose';

/**
 * @class UserService
 */
class UserService {

  /**
   * @description Fetches single user from the storage by id
   * @param id
   * @returns {Promise<User>}
   */
  async findById(id): Promise<User> {
    const user: UserType = await UserRepository.findOne({_id: id});
    return user;
  }

  /**
   * @description Saves the user in the storage
   * @param {User} User
   * @returns {Promise<User>}
   */
  async save(user: User): Promise<User> {
    return (await new UserRepository(user).save()).toObject({ virtuals: true });
  }

  /**
   * @description Update the user in the storage
   * @param {User} User
   * @returns {Promise<User>}
   */
  async update(id , user: User): Promise<User> {
    return await UserRepository.updateOne({ '_id' : Types.ObjectId(id) } , user);
  }


  /**
   * @description Fetches all users from the storage
   * @returns {Promise<User[]>}
   */
  async findAll(): Promise<User[]> {
    return await UserRepository.find() as User[];
  }

  /**
   * @description Deletes a single user from storage
   * @returns {Promise<void>}
   */
  async delete(id) {
    return await UserRepository.deleteOne({ '_id' : Types.ObjectId(id) });
  }

}

export default new UserService();