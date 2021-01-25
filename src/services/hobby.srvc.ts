import { Hobby } from '../models/hobby';
import HobbyRepository, { HobbyType } from '../schemas/hobby.schema';
import { Types } from 'mongoose';

/**
 * @class hobbyService
 */
class HobbyService {

  /**
   * @description Fetches single hobby from the storage by id
   * @param id
   * @returns {Promise<hobby>}
   */
  async findById(id): Promise<Hobby> {
    const hobby: HobbyType = await HobbyRepository.findOne({_id: id});
    return hobby;
  }

  /**
   * @description Fetches single hobby from the storage by userId
   * @param userId
   * @returns {Promise<hobby>}
   */
  async findByUser(userId): Promise<Hobby[]> {
    return await HobbyRepository.find({userId: Types.ObjectId(userId)});
  }

  /**
   * @description Saves the hobby in the storage
   * @param {Hobby} Hobby
   * @returns {Promise<Hobby>}
   */
  async save(hobby: Hobby): Promise<Hobby> {
    return (await new HobbyRepository(hobby).save()).toObject({ virtuals: true });
  }

  /**
   * @description Update the hobby in the storage
   * @param {Hobby} Hobby
   * @returns {Promise<Hobby>}
   */
  async update(id , hobby: Hobby): Promise<Hobby> {
    return await HobbyRepository.updateOne({ '_id' : Types.ObjectId(id) } , hobby);
  }

  /**
   * @description Fetches all hobbys from the storage
   * @returns {Promise<hobby[]>}
   */
  async findAll(): Promise<Hobby[]> {
    return await HobbyRepository.find() as Hobby[];
  }

  /**
   * @description Deletes a single hobby from storage
   * @returns {Promise<void>}
   */
  async delete(id) {
    return await HobbyRepository.deleteOne({ '_id' : Types.ObjectId(id) });
  }


}

export default new HobbyService();