import { useEffect, useState } from "react";
import { fetchCourses } from "../services/course.service";

export default function useCourses() {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return {
        courses,
        loading,
        reload: loadCourses,
    };

}