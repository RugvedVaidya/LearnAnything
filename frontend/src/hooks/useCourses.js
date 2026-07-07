import { useEffect, useState } from "react";
import { fetchCourses } from "../services/course.service";
import { createCourse } from "../services/course.service";

export default function useCourses() {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {

        try {

            const response = await fetchCourses();

            setCourses(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const generate = async (data) => {

        try {

            setGenerating(true);

            await createCourse(data);

            await loadCourses();

        } finally {

            setGenerating(false);

        }

    };

    return {
        courses,
        loading,
        generating,
        reload: loadCourses,
        generate,
    };

}