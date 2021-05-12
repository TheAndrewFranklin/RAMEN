import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
	public newUser = (req: Request, res: Response, next: NextFunction): void => {
		const schema = Joi.object({
			username: Joi.string().alphanum().min(3).max(30).required(),
			email: Joi.string().email().required(),
			password: Joi.string().min(3).required(),
		});
		const { error } = schema.validate(req.body);
		if (error) {
			next(error);
		}
		next();
	};
}

export default UserValidator;
