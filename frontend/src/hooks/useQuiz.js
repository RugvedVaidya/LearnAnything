import { useState } from "react";

import {

    createChapterQuiz,

    createCourseQuiz,

    submitQuizAnswers,

    fetchQuizHistory,

    fetchQuizAttempt,

    fetchQuizCourses,

    fetchQuiz,

} from "../services/quiz.service";

export default function useQuiz() {

    const [loading, setLoading] = useState(false);

    const generateChapter = async (chapterId) => {

        setLoading(true);

        try {

            return await createChapterQuiz(chapterId);

        }

        finally {

            setLoading(false);

        }

    };

    const generateCourse = async (courseId) => {

        setLoading(true);

        try {

            return await createCourseQuiz(courseId);

        }

        finally {

            setLoading(false);

        }

    };

    const submit = async (quizId, answers) => {

        setLoading(true);

        try {

            return await submitQuizAnswers(

                quizId,

                answers

            );

        }

        finally {

            setLoading(false);

        }

    };

    const getCourses = async () => {

        setLoading(true);

        try {

            return await fetchQuizCourses();

        }

        finally {

            setLoading(false);

        }

    };

    const history = async () => {

        setLoading(true);

        try {

            return await fetchQuizHistory();

        }

        finally {

            setLoading(false);

        }

    };

    const getAttempt = async (attemptId) => {

        setLoading(true);

        try {

            return await fetchQuizAttempt(

                attemptId

            );

        }

        finally {

            setLoading(false);

        }

    };

    const getQuiz = async (quizId) => {

        setLoading(true);

        try {

            return await fetchQuiz(quizId);

        }

        finally {

            setLoading(false);

        }

    };

    return {

        loading,

        getCourses,

        generateChapter,

        generateCourse,

        submit,

        history,

        getAttempt,

        getQuiz,
    };

}