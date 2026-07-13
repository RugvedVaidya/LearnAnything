import api from "./api";

export const openLesson = (lessonId) => {

    return api.post(`/progress/open/${lessonId}`);

};

export const completeLesson = (lessonId) => {

    return api.post(`/progress/complete/${lessonId}`);

};

export const getProgress = (lessonId) => {

    return api.get(`/progress/${lessonId}`);

};

export const getCourseProgress = (courseId) => {

    return api.get(`/progress/course/${courseId}`);

};