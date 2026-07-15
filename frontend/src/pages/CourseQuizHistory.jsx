import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import Loader from "../components/common/Loader";

import useQuiz from "../hooks/useQuiz";

import CoursePerformanceHero from "../components/quiz/CoursePerformanceHero";
import PerformanceStats from "../components/quiz/PerformanceStats";
import ChapterPerformanceCard from "../components/quiz/ChapterPerformanceCard";
import FinalAssessmentCard from "../components/quiz/FinalAssessmentCard";

export default function CourseQuizHistory() {

    const { courseId } = useParams();

    const {

        getCourseHistory,

        loading,

    } = useQuiz();

    const [history, setHistory] = useState(null);

    useEffect(() => {

        loadHistory();

    }, []);

    const loadHistory = async () => {

        try {

            const data = await getCourseHistory(courseId);

            setHistory(data);

        }

        catch (error) {

            console.error(error);

        }

    };

    if (loading || !history) {

        return <Loader />;

    }

    return (

        <AppLayout>

            <div className="max-w-[1700px] mx-auto">

                <CoursePerformanceHero

                    course={history.course}

                />

                <PerformanceStats

                    stats={history.stats}

                />

                <section className="mt-10 space-y-8">

                    {

                        history.chapters.map((chapter)=>(

                            <ChapterPerformanceCard

                                key={chapter.id}

                                chapter={chapter}

                            />

                        ))

                    }

                </section>

                <FinalAssessmentCard

                    attempts={history.finalAssessments}

                />

            </div>

        </AppLayout>

    );

}