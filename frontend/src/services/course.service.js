import {
    getCourses,
    getCourse,
    generateCourse,
} from "../api/course.api";

export const fetchCourses = async () => {
    const res = await getCourses();
    return res.data;
};

export const fetchCourse = async (id) => {
    const res = await getCourse(id);
    return res.data;
};

export const createCourse = async (data) => {
    const res = await generateCourse(data);
    return res.data;
};