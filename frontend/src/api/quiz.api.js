import api from "./api";

export const generateChapterQuiz = (chapterId) => {
    return api.post(`/quizzes/chapter/${chapterId}`);
};

export const generateCourseQuiz = (courseId) => {
    return api.post(`/quizzes/course/${courseId}`);
};

export const submitQuiz = (quizId, answers) => {
    return api.post(`/quizzes/${quizId}/submit`, {
        answers,
    });
};

export const getQuizHistory = () => {
    return api.get("/quizzes/history");
};

export const getQuizAttempt = (attemptId) => {
    return api.get(`/quizzes/attempt/${attemptId}`);
};

export const getQuizCourses = () => {
    return api.get("/quizzes");
};

export const getQuiz = (quizId) => {
    return api.get(`/quizzes/${quizId}`);
};