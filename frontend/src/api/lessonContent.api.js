import api from "./api";

export const fetchLessonContent = (lessonId) => {
    return api.get(`/lesson-content/${lessonId}`);
};