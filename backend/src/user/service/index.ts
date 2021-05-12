import User from '../model';
import { IUser } from '../interfaces';

class UserService {
	public getAllUsers = async (): Promise<IUser[]> => {
		const data = await User.find();
		return data;
	};

	public newUser = async (body: IUser): Promise<IUser> => {
		const data = await User.create(body);
		return data;
	};

	public getUser = async (_id: string): Promise<IUser> => {
		const data = await User.findById(_id);
		return data;
	};

	public updateUser = async (_id: string, body: IUser): Promise<IUser> => {
		const data = await User.findByIdAndUpdate({ _id }, body, { new: true });
		return data;
	};

	public deleteUser = async (_id: string): Promise<IUser> => {
		const data = await User.findByIdAndDelete(_id);
		return data;
	};
}

export default UserService;
