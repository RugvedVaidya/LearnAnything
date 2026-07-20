import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";
import chapterRoutes from "./routes/chapter.routes.js";
import lessonContentRoutes from "./routes/lessonContent.routes.js";
import lessonRoutes from "./routes/lesson.routes.js";
import mentorRoutes from "./routes/mentor.routes.js";
import learningRoutes from "./routes/learning.routes.js";
import progressRoutes from "./routes/progress.routes.js";

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
app.use("/api/v1/lessons", lessonRoutes);
app.use("/api/v1/lesson-content", lessonContentRoutes);
app.use("/api/v1/mentor", mentorRoutes);
app.use("/api/v1/my-learning", learningRoutes);
app.use("/api/v1/progress", progressRoutes);

export default app;