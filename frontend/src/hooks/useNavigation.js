import { useEffect, useState } from "react";

import { fetchLessonNavigation } from "../services/navigation.service";

export default function useNavigation(lessonId) {

    const [navigation, setNavigation] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (lessonId) {

            loadNavigation();

        }

    }, [lessonId]);

    const loadNavigation = async () => {

        try {

            const data = await fetchLessonNavigation(lessonId);

            setNavigation(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    return {

        navigation,

        loading,

    };

}