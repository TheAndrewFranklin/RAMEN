import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces';

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  pwdHash: { type: String, required: true },
});

export default model<IUser>('User', userSchema);
