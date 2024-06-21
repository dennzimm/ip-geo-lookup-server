import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

export const app = express();

app.use(morgan(isDevelopment ? "dev" : "common"));
app.use(helmet());
app.use(cors());
app.use(express.json());
