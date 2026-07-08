import { generateLessons } from "../api/lesson.api";

export const generateChapterLessons = async (chapterId) => {

    const response = await generateLessons(chapterId);

    return response.data;

};