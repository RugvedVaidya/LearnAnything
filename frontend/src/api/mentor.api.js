import api from "./api";

export const askMentor = (lessonId, question) => {

    return api.post(`/mentor/${lessonId}`, {
        question,
    });

};