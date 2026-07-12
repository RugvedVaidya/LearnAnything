import prisma from "../config/prisma.js";

export const getLessonNavigation = async (lessonId) => {

    const lesson = await prisma.lesson.findUnique({

        where: {
            id: lessonId,
        },

        include: {

            chapter: {

                include: {

                    lessons: {

                        orderBy: {
                            order: "asc",
                        },

                    },

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

    const lessons = lesson.chapter.lessons;

    const currentIndex = lessons.findIndex(

        (l) => l.id === lesson.id

    );

    return {

        course: lesson.chapter.module.course,

        module: lesson.chapter.module,

        chapter: {

            id: lesson.chapter.id,

            title: lesson.chapter.title,

            description: lesson.chapter.description,

            order: lesson.chapter.order,

        },

        currentLesson: {

            id: lesson.id,

            title: lesson.title,

            order: lesson.order,

        },

        previousLesson:

            currentIndex > 0

                ? {

                    id: lessons[currentIndex - 1].id,

                    title: lessons[currentIndex - 1].title,

                    order: lessons[currentIndex - 1].order,

                }

                : null,

        nextLesson:

            currentIndex < lessons.length - 1

                ? {

                    id: lessons[currentIndex + 1].id,

                    title: lessons[currentIndex + 1].title,

                    order: lessons[currentIndex + 1].order,

                }

                : null,

    };

};