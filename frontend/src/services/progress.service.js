import {

    openLesson,

    completeLesson,

} from "../api/progress.api";

export const markLessonOpened = async (lessonId) => {

    const response = await openLesson(lessonId);

    return response.data.data;

};

export const markLessonCompleted = async (lessonId) => {

    const response = await completeLesson(lessonId);

    return response.data.data;

};