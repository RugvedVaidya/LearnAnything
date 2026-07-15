import {
    getQuizCourses,
    generateChapterQuiz,
    generateCourseQuiz,
    submitQuiz,
    getQuizHistory,
    getQuizAttempt,
    getQuiz,
    getCourseQuizHistory,
} from "../api/quiz.api";

export const fetchQuizCourses = async () => {

    const response = await getQuizCourses();

    return response.data.data;

};

export const createChapterQuiz = async (chapterId) => {

    const response = await generateChapterQuiz(chapterId);

    return response.data.data;

};

export const createCourseQuiz = async (courseId) => {

    const response = await generateCourseQuiz(courseId);

    return response.data.data;

};

export const submitQuizAnswers = async (quizId, answers) => {

    const response = await submitQuiz(quizId, answers);

    return response.data.data;

};

export const fetchQuizHistory = async () => {

    const response = await getQuizHistory();

    return response.data.data;

};

export const fetchQuizAttempt = async (attemptId) => {

    const response = await getQuizAttempt(attemptId);

    return response.data.data;

};

export const fetchQuiz = async (quizId) => {

    const response = await getQuiz(quizId);

    return response.data.data;

};

export const fetchCourseHistory = async (

    courseId

) => {

    const response = await getCourseQuizHistory(

        courseId

    );

    return response.data.data;

};