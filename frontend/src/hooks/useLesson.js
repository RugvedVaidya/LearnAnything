import { useEffect, useState } from "react";
import { getLessonContent } from "../services/lessonContent.service";

export default function useLesson(lessonId) {

    const [lesson, setLesson] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (lessonId) {
            loadLesson();
        }

    }, [lessonId]);

    const loadLesson = async () => {

        try {

            const response = await getLessonContent(lessonId);

            setLesson(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    return {
        lesson,
        loading,
    };

}