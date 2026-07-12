import { getLessonNavigation } from "../api/navigation.api";

export const fetchLessonNavigation = async (lessonId) => {

    const response = await getLessonNavigation(lessonId);

    return response.data.data;

};