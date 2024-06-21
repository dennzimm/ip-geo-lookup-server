import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { isDevelopment } from "./env";
import { errorHandlerMiddleware } from "./middlewares/error-handler.middleware";
import { unexpectedRequestMiddleware } from "./middlewares/unexpected-request.middleware";

export const app = express();

app.use(morgan(isDevelopment ? "dev" : "common"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(unexpectedRequestMiddleware);
app.use(errorHandlerMiddleware);
