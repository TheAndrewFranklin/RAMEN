import mongoose from 'mongoose';
import Logger from './logger';

class Database {
	private logger;

	constructor() {
		this.logger = Logger.logger;
	}

	public initializeDatabase = async (): Promise<void> => {
		try {
			await mongoose.connect(process.env['DATABASE'], {
				useFindAndModify: false,
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			this.logger.info('Connected to the database');
		} catch (error) {
			this.logger.error('Could not connect to the database:', error);
		}
	};

	public disconnect = async (): Promise<void> => {
		try {
			await mongoose.connection.close();
			this.logger.info('Disconnected successfully');
		} catch (error) {
			this.logger.error('Could not close connection', error);
		}
	};
}

export default Database;
