import api from "./api";

export const generateLessons = (chapterId) => {
    return api.post(`/lessons/generate/${chapterId}`);
};