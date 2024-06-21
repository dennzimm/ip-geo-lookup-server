import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { apiRouter } from './api';
import { healthCheckRouter } from './api/health-check/health-check.router';
import { isDevelopment } from './env';
import { errorHandlerMiddleware } from './middlewares/error-handler.middleware';
import { rateLimiterMiddleware } from './middlewares/rate-limiter.middleware';
import { unexpectedRequestMiddleware } from './middlewares/unexpected-request.middleware';

dotenv.config();

export const app = express();

app.use(morgan(isDevelopment ? 'dev' : 'common'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimiterMiddleware);

app.use('/health-check', healthCheckRouter);
app.use('/api', apiRouter);

app.use(unexpectedRequestMiddleware);
app.use(errorHandlerMiddleware);
