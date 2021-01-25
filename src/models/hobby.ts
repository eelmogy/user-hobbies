import * as mongoose from 'mongoose';

export interface Hobby {
  name: string;
  passionLevel: string;
  year: Number;
  userId?: mongoose.Schema.Types.ObjectId;
}