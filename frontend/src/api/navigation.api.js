import api from "./api";

export const getLessonNavigation = (lessonId) => {

    return api.get(`/navigation/${lessonId}`);

};