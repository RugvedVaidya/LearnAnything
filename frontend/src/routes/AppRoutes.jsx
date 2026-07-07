import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import useAuth from "../hooks/useAuth";
import CourseDetails from "../pages/CourseDetails";

const ProtectedRoute = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading)
        return <div>Loading...</div>;

    if (!user)
        return <Navigate to="/login" replace />;

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

            </Routes>

        </BrowserRouter>

    );
}