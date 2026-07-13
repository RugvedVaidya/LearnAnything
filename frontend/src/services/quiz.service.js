import {

    generateChapterQuiz,

    generateCourseQuiz,

    submitQuiz,

    getQuizHistory,

    getQuizAttempt,

    getQuizCourses,

} from "../api/quiz.api";

export const createChapterQuiz = async (chapterId) => {

    const response = await generateChapterQuiz(chapterId);

    return response.data;

};

export const createCourseQuiz = async (courseId) => {

    const response = await generateCourseQuiz(courseId);

    return response.data;

};

export const submitQuizAnswers = async (

    quizId,

    answers

) => {

    const response = await submitQuiz(

        quizId,

        answers

    );

    return response.data;

};

export const fetchQuizHistory = async () => {

    const response = await getQuizHistory();

    return response.data;

};

export const fetchQuizAttempt = async (attemptId) => {

    const response = await getQuizAttempt(attemptId);

    return response.data;

};

export const fetchQuizCourses = async () => {

    const response = await getQuizCourses();

    return response.data;

};