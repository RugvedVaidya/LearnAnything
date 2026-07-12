import { useState } from "react";

import {

    markLessonOpened,

    markLessonCompleted,

} from "../services/progress.service";

export default function useProgress() {

    const [loading, setLoading] = useState(false);

    const openLesson = async (lessonId) => {

        try {

            await markLessonOpened(lessonId);

        }

        catch (error) {

            console.error(error);

        }

    };

    const completeLesson = async (lessonId) => {

        try {

            setLoading(true);

            await markLessonCompleted(lessonId);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    return {

        loading,

        openLesson,

        completeLesson,

    };

}