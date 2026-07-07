import api from "./api";

export const getCourses = () => api.get("/courses");

export const getCourse = (id) => api.get(`/courses/${id}`);

export const generateCourse = (data) =>
    api.post("/courses/generate", data);