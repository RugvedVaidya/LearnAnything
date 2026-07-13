import express from "express";
import authRoutes from "./auth.routes.js";
import courseRoutes from "./course.routes.js"
import navigationRoutes from "./navigation.routes.js";
import progressRoutes from "./progress.routes.js";
import dashboardRoutes from "./dashboard.routes.js";

const router = express.Router();

router.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Backend running 🚀",
    });
});

router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/navigation", navigationRoutes);
router.use("/progress", progressRoutes);
router.use("/dashboard", dashboardRoutes);

export default router;