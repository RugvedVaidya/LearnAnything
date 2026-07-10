import prisma from "../config/prisma.js";
import { askMentor } from "./ai/mentor.service.js";

export const askLessonMentor = async (lessonId, question) => {

    const lesson = await prisma.lesson.findUnique({
        where: {
            id: lessonId,
        },
    });

    if (!lesson) {
        throw new Error("Lesson not found.");
    }

    if (!lesson.content) {
        throw new Error("Lesson content has not been generated yet.");
    }

    const answer = await askMentor({
        lessonContent: lesson.content,
        question,
    });

    return {
        answer,
    };

};