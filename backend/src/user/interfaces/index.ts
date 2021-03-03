import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string | number;
  username: string;
  email: string;
  pwdHash: string;
}
