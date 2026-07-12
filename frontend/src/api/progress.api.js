import api from "./api";

export const openLesson = (lessonId) => {

    return api.post(`/progress/open/${lessonId}`);

};

export const completeLesson = (lessonId) => {

    return api.post(`/progress/complete/${lessonId}`);

};