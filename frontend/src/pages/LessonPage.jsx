import { useParams } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Loader from "../components/common/Loader";

import LessonHero from "../components/lesson/LessonHero";
import LessonSidebar from "../components/lesson/LessonSidebar";
import MentorChat from "../components/lesson/MentorChat";
import LessonSection from "../components/lesson/LessonSection";
import ReadingProgress from "../components/lesson/ReadingProgress";

import useLesson from "../hooks/useLesson";
import useMentor from "../hooks/useMentor";

import useNavigation from "../hooks/useNavigation";
import LessonNavigation from "../components/lesson/LessonNavigation";

import { useEffect } from "react";
import useProgress from "../hooks/useProgress";
import LessonCompletion from "../components/lesson/LessonCompletion";

export default function LessonPage() {

    const { lessonId } = useParams();

    const {
        lesson,
        loading,
    } = useLesson(lessonId);

    const {
        messages,
        loading: mentorLoading,
        ask,
    } = useMentor(lessonId);

    const {
        navigation,
    } = useNavigation(lessonId);

    const {
        progress,

        loading: progressLoading,

        openLesson,

        completeLesson,

    } = useProgress();

    useEffect(() => {

        if (lessonId) {

            openLesson(lessonId);

        }

    }, [lessonId]);

    if (loading) {

        return <Loader />;

    }

    console.log(navigation);

    if (!lesson) {

        return (

            <AppLayout>

                <ReadingProgress />

                <div className="flex items-center justify-center h-[70vh]">

                    <h1 className="text-3xl font-bold">

                        Lesson Not Found

                    </h1>

                </div>

            </AppLayout>

        );

    }

    let lessonData;

    try {

        lessonData = JSON.parse(lesson.content);

    } catch {

        lessonData = {

            lesson_title: lesson.title,

            summary: lesson.summary,

            difficulty: lesson.difficulty,

            content: [

                {

                    section: "Lesson",

                    text: lesson.content,

                },

            ],

        };

    }

    return (

        <AppLayout>

            <div className="max-w-[1600px] mx-auto">

                {/* Hero */}

                <LessonHero

                    lesson={lesson}

                    lessonData={lessonData}

                />

                {/* Main Layout */}

                <div className="grid grid-cols-12 gap-8 mt-8">

                    {/* LEFT CONTENT */}

                    <div className="col-span-8">

                        <div className="space-y-8">

                            {(lessonData.content || []).map((section, index) => (

                                <LessonSection

                                    key={index}

                                    section={section}

                                />

                            ))}

                        </div>

                        {/* AI Mentor */}

                        <div className="mt-10">

                            <MentorChat

                                messages={messages}

                                loading={mentorLoading}

                                ask={ask}

                            />

                            <LessonCompletion
                                progress = {progress}

                                loading={progressLoading}

                                onComplete={() => completeLesson(lessonId)}

                            />

                            <LessonNavigation

                                navigation={navigation}

                            />

                        </div>

                    </div>

                    {/* RIGHT SIDEBAR */}

                    <div className="col-span-4">

                        <LessonSidebar />

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}