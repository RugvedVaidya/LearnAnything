import prisma from "../config/prisma.js";

import { generateQuiz } from "./ai/quizGeneration.service.js";

export const generateChapterQuiz = async (chapterId) => {

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

    if (!chapter) {

        throw new Error("Chapter not found.");

    }

    const questions = await generateQuiz({

        type: "CHAPTER",

        data: {

            courseTitle: chapter.module.course.title,

            moduleTitle: chapter.module.title,

            chapterTitle: chapter.title,

            lessons: chapter.lessons,

        },

    });

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

    const questions = await generateQuiz({

        type: "COURSE",

        data: {

            courseTitle: course.title,

            modules: course.modules,

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
            Number(selected) === question.correctAnswer;

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