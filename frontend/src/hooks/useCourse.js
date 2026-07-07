import { useEffect, useState } from "react";
import { fetchCourse } from "../services/course.service";

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

    return {
        course,
        loading,
        reload: loadCourse,
    };
}