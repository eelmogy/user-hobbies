import * as mongoose from 'mongoose';
import { User } from '../models/user';

export type UserType = mongoose.Document & {
  name: string
};

const UserSchema = new mongoose.Schema({
  name: String
}, {timestamps: true});


type UserType = User & mongoose.Document;
const UserRepository = mongoose.model<UserType>('User', UserSchema);
export default UserRepository;