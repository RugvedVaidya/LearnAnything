import { useState } from "react";

import {
    markLessonOpened,
    markLessonCompleted,
    fetchLessonProgress,
} from "../services/progress.service";

export default function useProgress() {

    const [progress, setProgress] = useState(null);

    const [loading, setLoading] = useState(false);

    const openLesson = async (lessonId) => {

        try {

            await markLessonOpened(lessonId);

            const data = await fetchLessonProgress(lessonId);

            setProgress(data);

        } catch (error) {

            console.error(error);

        }

    };

    const completeLesson = async (lessonId) => {

        try {

            setLoading(true);

            const updated = await markLessonCompleted(lessonId);

            setProgress(updated);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    return {

        progress,

        loading,

        openLesson,

        completeLesson,

    };

}