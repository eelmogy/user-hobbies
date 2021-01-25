import * as mongoose from 'mongoose';
import { Hobby } from '../models/hobby';
import { User } from '../models/user';

export type HobbyType = mongoose.Document & {
  name: string,
  passionLevel: string,
  year: Number,
  userId: mongoose.Schema.Types.ObjectId
};

const HobbySchema = new mongoose.Schema({
  passionLevel: String,
  name: String,
  year: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true});


type HobbyType = Hobby & mongoose.Document;
const HobbyRepository = mongoose.model<HobbyType>('Hobby', HobbySchema);
export default HobbyRepository;