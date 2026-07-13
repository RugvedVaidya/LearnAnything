import { useEffect, useState } from "react";

import AppLayout from "../layouts/AppLayout";
import Loader from "../components/common/Loader";

import QuizCourseCard from "../components/quiz/QuizCourseCard";

import useQuiz from "../hooks/useQuiz";

export default function QuizPage() {

    const {

        getCourses,

        generateChapter,

        generateCourse,

    } = useQuiz();

    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadCourses();

    }, []);

    const loadCourses = async () => {

        try {

            const response = await getCourses();

            setCourses(response.data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const handleChapterQuiz = async (chapterId) => {

        try {

            const response = await generateChapter(chapterId);

            console.log(response);

            // navigation comes next

        }

        catch (error) {

            console.error(error);

        }

    };

    const handleCourseQuiz = async (courseId) => {

        try {

            const response = await generateCourse(courseId);

            console.log(response);

        }

        catch (error) {

            console.error(error);

        }

    };

    if (loading) {

        return <Loader />;

    }

    return (

        <AppLayout>

            <div className="max-w-[1600px] mx-auto">

                <div className="mb-10">

                    <h1 className="text-5xl font-bold">

                        AI Quiz Center

                    </h1>

                    <p className="text-zinc-400 mt-3 text-lg">

                        Challenge yourself with chapter quizzes or complete a final assessment.

                    </p>

                </div>

                {

                    courses.length === 0 ? (

                        <div className="rounded-[30px] border border-[#2F2A45] bg-[#151827] p-20 text-center">

                            <h2 className="text-3xl font-bold">

                                No Courses Found

                            </h2>

                            <p className="text-zinc-400 mt-4">

                                Generate a course first to start taking quizzes.

                            </p>

                        </div>

                    )

                    :

                    (

                        <div className="space-y-8">

                            {

                                courses.map((course)=>(

                                    <QuizCourseCard

                                        key={course.id}

                                        course={course}

                                        onCourseQuiz={handleCourseQuiz}

                                        onChapterQuiz={handleChapterQuiz}

                                    />

                                ))

                            }

                        </div>

                    )

                }

            </div>

        </AppLayout>

    );

}