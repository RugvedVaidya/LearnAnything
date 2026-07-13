import { useEffect, useState } from "react";

import { fetchCourseProgress } from "../services/progress.service";

export default function useCourseProgress(courseId) {

    const [progress, setProgress] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (courseId) {

            loadProgress();

        }

    }, [courseId]);

    const loadProgress = async () => {

        try {

            const data = await fetchCourseProgress(courseId);

            setProgress(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    return {

        progress,

        loading,

        refresh: loadProgress,

    };

}