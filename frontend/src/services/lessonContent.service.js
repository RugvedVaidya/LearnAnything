import { fetchLessonContent } from "../api/lessonContent.api";

export const getLessonContent = async (lessonId) => {

    const response = await fetchLessonContent(lessonId);

    return response.data;

};