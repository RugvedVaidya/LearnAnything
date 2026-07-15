import prisma from "../config/prisma.js";

import { generateQuiz } from "./ai/quizGeneration.service.js";

export const generateChapterQuiz = async (chapterId) => {

    console.log("loading chapter...");

    const chapter = await prisma.chapter.findUnique({

        where: {
            id: chapterId,
        },

        include: {

            module: {

                include: {

                    course: true,

                },

            },

            lessons: {

                orderBy: {

                    order: "asc",

                },

            },

        },

    });

    console.log("chapter loaded");
    console.log("calling api...");

    if (!chapter) {

        throw new Error("Chapter not found.");

    }

    const questions = await generateQuiz({

    type: "CHAPTER",

    data: {

        courseTitle: chapter.module.course.title,

        moduleTitle: chapter.module.title,

        chapterTitle: chapter.title,

        lessons: chapter.lessons.map((lesson) => ({

            title: lesson.title,

            summary: lesson.summary,

        })),

    },

});

    console.log("ai returned");

    const quiz = await prisma.quiz.create({

        data: {

            type: "CHAPTER",

            courseId: chapter.module.course.id,

            chapterId: chapter.id,

            questions: {

                create: questions.map((question) => ({

                    question: question.question,

                    optionA: question.options[0],

                    optionB: question.options[1],

                    optionC: question.options[2],

                    optionD: question.options[3],

                    correctAnswer: String(question.correctAnswer),

                    explanation: question.explanation,

                    difficulty: question.difficulty,

                    topic: question.topic,

                })),

            },

        },

        include: {

            questions: true,

        },

    });

    return quiz;

};
export const generateCourseQuiz = async (courseId) => {

    const course = await prisma.course.findUnique({

        where: {

            id: courseId,

        },

        include: {

            modules: {

                orderBy: {

                    order: "asc",

                },

                include: {

                    chapters: {

                        orderBy: {

                            order: "asc",

                        },

                        include: {

                            lessons: {

                                orderBy: {

                                    order: "asc",

                                },

                                select: {

                                    title: true,

                                    summary: true,

                                },

                            },

                        },

                    },

                },

            },

        },

    });

    if (!course) {

        throw new Error("Course not found.");

    }

    const simplifiedModules = course.modules.map((module) => ({

        title: module.title,

        description: module.description,

        chapters: module.chapters.map((chapter) => ({

            title: chapter.title,

            description: chapter.description,

            lessons: chapter.lessons.map((lesson) => ({

                title: lesson.title,

                summary: lesson.summary,

            })),

        })),

    }));

    const questions = await generateQuiz({

        type: "COURSE",

        data: {

            courseTitle: course.title,

            modules: simplifiedModules,

        },

    });

    const quiz = await prisma.quiz.create({

        data: {

            type: "COURSE",

            courseId: course.id,

            questions: {

                create: questions.map((question) => ({

                    question: question.question,

                    optionA: question.options[0],

                    optionB: question.options[1],

                    optionC: question.options[2],

                    optionD: question.options[3],

                    correctAnswer: String(question.correctAnswer),

                    explanation: question.explanation,

                    difficulty: question.difficulty,

                    topic: question.topic,

                })),

            },

        },

        include: {

            questions: true,

        },

    });

    return quiz;

};

export const submitQuiz = async (
    userId,
    quizId,
    answers
) => {

    const quiz = await prisma.quiz.findUnique({

        where: {
            id: quizId,
        },

        include: {
            questions: true,
        },

    });

    if (!quiz) {

        throw new Error("Quiz not found.");

    }

    let score = 0;

    const answerData = [];

    quiz.questions.forEach((question) => {

        const selected = answers[question.id];

        const isCorrect =
            Number(selected) === Number(question.correctAnswer);

        if (isCorrect) {

            score++;

        }

        answerData.push({

            questionId: question.id,

            selectedAnswer: String(selected),

            isCorrect,

        });

    });

    const percentage = Math.round(

        (score / quiz.questions.length) * 100

    );

    const attempt = await prisma.quizAttempt.create({

        data: {

            quizId,

            userId,

            score,

            totalQuestions: quiz.questions.length,

            percentage,

            submittedAt: new Date(),

            answers: {

                create: answerData,

            },

        },

    });

    return {

        attemptId: attempt.id,

        score,

        totalQuestions: quiz.questions.length,

        percentage,

    };

};

export const getQuizHistory = async (userId) => {

    return await prisma.quizAttempt.findMany({

        where: {

            userId,

        },

        include: {

            quiz: {

                include: {

                    chapter: true,

                    course: true,

                },

            },

        },

        orderBy: {

            submittedAt: "desc",

        },

    });

};


export const getAttempt = async (

    attemptId,

    userId

) => {

    const attempt = await prisma.quizAttempt.findFirst({

        where: {

            id: attemptId,

            userId,

        },

        include: {

            quiz: {

                include: {

                    questions: true,

                    chapter: true,

                    course: true,

                },

            },

            answers: {

                include: {

                    question: true,

                },

            },

        },

    });

    if (!attempt) {

        throw new Error("Attempt not found.");

    }

    return attempt;

};

export const getQuizCourses = async (userId) => {

    return await prisma.course.findMany({

        where: {

            userId,

        },

        orderBy: {

            createdAt: "desc",

        },

        include: {

            modules: {

                orderBy: {

                    order: "asc",

                },

                include: {

                    chapters: {

                        orderBy: {

                            order: "asc",

                        },

                        select: {

                            id: true,

                            title: true,

                            description: true,

                            order: true,

                        },

                    },

                },

            },

        },

    });

};

export const getQuizById = async (quizId) => {

    const quiz = await prisma.quiz.findUnique({

        where: {

            id: quizId,

        },

        include: {

            questions: {

                orderBy: {

                    createdAt: "asc",

                },

            },

            chapter: true,

            course: true,

        },

    });

    if (!quiz) {

        throw new Error("Quiz not found.");

    }

    return quiz;

};

export const getCourseQuizHistory = async (

    userId,

    courseId,

) => {

    const course = await prisma.course.findFirst({

        where: {

            id: courseId,

            userId,

        },

        include: {

            modules: {

                orderBy: {

                    order: "asc",

                },

                include: {

                    chapters: {

                        orderBy: {

                            order: "asc",

                        },

                    },

                },

            },

        },

    });

    if (!course) {

        throw new Error("Course not found.");

    }

    const attempts = await prisma.quizAttempt.findMany({

        where: {

            userId,

            quiz: {

                courseId,

            },

        },

        include: {

            quiz: {

                include: {

                    chapter: true,

                },

            },

        },

        orderBy: {

            submittedAt: "desc",

        },

    });

    const averageScore =

        attempts.length === 0

            ? 0

            : Math.round(

                attempts.reduce(

                    (sum, attempt) =>

                        sum + attempt.percentage,

                    0

                ) / attempts.length

            );

    const bestScore =

        attempts.length === 0

            ? 0

            : Math.max(

                ...attempts.map(

                    (attempt) => attempt.percentage

                )

            );

    const chapters = course.modules.flatMap(

        (module) =>

            module.chapters.map(

                (chapter) => ({

                    id: chapter.id,

                    title: chapter.title,

                    attempts: attempts.filter(

                        (attempt) =>

                            attempt.quiz.chapterId === chapter.id

                    ),

                })

            )

    );

    const finalAssessments = attempts.filter(

        (attempt) =>

            attempt.quiz.type === "COURSE"

    );

    return {

        course: {

            id: course.id,

            title: course.title,

        },

        stats: {

            attempts: attempts.length,

            averageScore,

            bestScore,

            chapterAttempts:

                attempts.filter(

                    (a) =>

                        a.quiz.type === "CHAPTER"

                ).length,

            courseAttempts:

                finalAssessments.length,

        },

        chapters,

        finalAssessments,

    };

};