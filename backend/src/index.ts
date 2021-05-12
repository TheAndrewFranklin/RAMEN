import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Server } from 'http';

import routes from './router';
import Database from './config/database';
import Logger from './config/logger';
import ErrorHandler from './middleware/error.middleware';

class Ramen {
	public app: Application;
	public server: Server;
	public host: string | number;
	public port: string | number;
	public db = new Database();
	public errorHandler = new ErrorHandler();
	private logStream = Logger.logStream;
	private logger = Logger.logger;

	constructor() {
		this.app = express();
		this.host = process.env['APP_HOST'];
		this.port = process.env['APP_PORT'];

		this.initializeMiddleWares();
		this.initializeRoutes();
		this.initializeDatabase();
		this.initializeErrorHandlers();
		this.startApp();
	}

	public initializeMiddleWares(): void {
		this.app.use(cors());
		this.app.use(helmet());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(morgan('combined', { stream: this.logStream }));
	}

	public initializeRoutes(): void {
		this.app.use(routes());
	}

	public initializeDatabase(): void {
		this.db.initializeDatabase();
	}

	public initializeErrorHandlers(): void {
		this.app.use(this.errorHandler.appErrorHandler);
		this.app.use(this.errorHandler.genericErrorHandler);
		this.app.use(this.errorHandler.notFound);
	}

	public startApp(): void {
		this.server = this.app.listen(this.port, () => {
			this.logger.info(`Server started at ${this.host}:${this.port}`);
		});
	}
}

export default new Ramen();
