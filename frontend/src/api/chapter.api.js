import api from "./api";

export const generateChapters = (moduleId) => {
    return api.post(`/chapters/generate/${moduleId}`);
};