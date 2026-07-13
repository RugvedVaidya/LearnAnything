import {

    openLesson,

    completeLesson,

} from "../api/progress.api";

import { getProgress } from "../api/progress.api";

export const fetchLessonProgress = async (lessonId) => {

    const response = await getProgress(lessonId);

    return response.data.data;

};

export const markLessonOpened = async (lessonId) => {

    const response = await openLesson(lessonId);

    return response.data.data;

};

export const markLessonCompleted = async (lessonId) => {

    const response = await completeLesson(lessonId);

    return response.data.data;

};