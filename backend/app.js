import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";
import chapterRoutes from "./routes/chapter.routes.js";
const app = express();

// Security
app.use(helmet());

// Logging
app.use(morgan("dev"));

// CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

// API Routes
app.use("/api/v1", routes);
app.use("/api/v1/chapters", chapterRoutes);

export default app;