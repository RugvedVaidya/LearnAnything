import prisma from "../config/prisma.js";
import { generateLessonContent } from "./ai/lessonContent.service.js";

export const getLessonContent = async (lessonId) => {

    const lesson = await prisma.lesson.findUnique({
        where: {
            id: lessonId,
        },
        include: {
            chapter: {
                include: {
                    module: {
                        include: {
                            course: true,
                        },
                    },
                },
            },
        },
    });

    if (!lesson) {
        throw new Error("Lesson not found.");
    }

    if (lesson.isGenerated && lesson.content) {
        return lesson;
    }

    const aiResponse = await generateLessonContent({
        courseTitle: lesson.chapter.module.course.title,
        moduleTitle: lesson.chapter.module.title,
        chapterTitle: lesson.chapter.title,
        lessonTitle: lesson.title,
        lessonSummary: lesson.summary,
        difficulty: lesson.difficulty,
    });

    console.log("AI RESPONSE TYPE:", typeof aiResponse);
    console.log("AI RESPONSE:", aiResponse);    

    const updatedLesson = await prisma.lesson.update({
        where: {
            id: lessonId,
        },
        data: {
            content: aiResponse.content,
            isGenerated: true,
        },
    });

    return updatedLesson;

};