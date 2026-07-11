import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";

import Dashboard from "../pages/Dashboard";
import CourseDetails from "../pages/CourseDetails";
import LessonPage from "../pages/LessonPage";

import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen bg-[#171717] flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* <Route
                    path="/register"
                    element={<Register />}
                /> */}

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/courses/:courseId"
                    element={
                        <ProtectedRoute>
                            <CourseDetails />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/lessons/:lessonId"
                    element={
                        <ProtectedRoute>
                            <LessonPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>

        </BrowserRouter>

    );

}