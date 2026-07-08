import { useEffect, useState } from "react";
import { fetchCourse } from "../services/course.service";
import { generateModuleChapters } from "../services/chapter.service";

export default function useCourse(courseId) {

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (courseId) {
            loadCourse();
        }
    }, [courseId]);

    const loadCourse = async () => {

        try {

            const response = await fetchCourse(courseId);

            setCourse(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const generateChapters = async (moduleId) => {

        await generateModuleChapters(moduleId);

        await loadCourse();

    };

    return {
        course,
        loading,
        reload: loadCourse,
        generateChapters,
    };
}