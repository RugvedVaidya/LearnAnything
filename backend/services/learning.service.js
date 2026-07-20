import prisma from "../config/prisma.js";
import { getCourseProgress } from "./progress.service.js";

export const getMyLearning = async (userId) => {

    const courses = await prisma.course.findMany({

        where: {
            userId,
            status: "READY"
        },

        include: {
            modules: {
                include: {
                    chapters: {
                        include: {
                            lessons: true
                        }
                    }
                }
            }
        }

    });

    const activeCourses = [];
    const completedCourses = [];

    let continueLearning = null;

    for (const course of courses) {

        const progress = await getCourseProgress(userId, course.id);

        const lastOpened = await prisma.lessonProgress.findFirst({

            where: {

                userId,

                lesson: {

                    chapter: {

                        module: {

                            courseId: course.id

                        }

                    }

                }

            },

            include: {

                lesson: true

            },

            orderBy: {

                lastOpenedAt: "desc"

            }

        });

        const courseData = {

            id: course.id,

            title: course.title,

            description: course.description,

            progress: progress.percentage,

            completedLessons: progress.completedLessons,

            totalLessons: progress.totalLessons,

            lastLesson: lastOpened?.lesson ?? null,

            updatedAt: lastOpened?.lastOpenedAt ?? course.createdAt

        };

        if (progress.percentage === 100) {

            completedCourses.push(courseData);

        } else {

            activeCourses.push(courseData);

        }

        if (

            lastOpened &&

            (!continueLearning ||

                lastOpened.lastOpenedAt >

                continueLearning.updatedAt)

        ) {

            continueLearning = courseData;

        }

    }

    return {

        continueLearning,

        activeCourses,

        completedCourses

    };

};