import { useParams } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Loader from "../components/common/Loader";

import LessonHero from "../components/lesson/LessonHero";
import LessonSidebar from "../components/lesson/LessonSidebar";
import MarkdownRenderer from "../components/lesson/MarkdownRenderer";
import MentorChat from "../components/lesson/MentorChat";

import useLesson from "../hooks/useLesson";
import useMentor from "../hooks/useMentor";

import ReadingProgress from "../components/lesson/ReadingProgress";

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

    if (loading)
        return <Loader />;

    if (!lesson)
        return (

            <AppLayout>

                <ReadingProgress />
                <div className="flex justify-center items-center h-[70vh]">

                    <h1 className="text-3xl font-bold">

                        Lesson Not Found

                    </h1>

                </div>

            </AppLayout>

        );

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

                <LessonHero

                    lesson={lesson}

                    lessonData={lessonData}

                />

                <div className="grid grid-cols-12 gap-8 mt-8">

                    {/* LEFT */}

                    <div className="col-span-8">

                        <div className="space-y-8">

                            {(lessonData.content || []).map((section, index) => (

                                <div

                                    key={index}

                                    className="rounded-[28px] bg-[#171827] border border-[#322A54] p-8"

                                >

                                    <h2 className="text-3xl font-bold text-violet-300 mb-6">

                                        {section.section}

                                    </h2>

                                    {section.text && (

                                        <MarkdownRenderer

                                            content={section.text}

                                        />

                                    )}

                                    {section.objectives && (

                                        <ul className="list-disc ml-6 mt-6 space-y-3">

                                            {section.objectives.map((item, i) => (

                                                <li key={i}>

                                                    {item}

                                                </li>

                                            ))}

                                        </ul>

                                    )}

                                    {section.points && (

                                        <ul className="list-disc ml-6 mt-6 space-y-3">

                                            {section.points.map((item, i) => (

                                                <li key={i}>

                                                    {item}

                                                </li>

                                            ))}

                                        </ul>

                                    )}

                                    {section.code && (

                                        <div className="mt-8">

                                            <MarkdownRenderer

                                                content={`\`\`\`java
${section.code}
\`\`\``}

                                            />

                                        </div>

                                    )}

                                    {section.questions && (

                                        <div className="space-y-5 mt-8">

                                            {section.questions.map((question, i) => (

                                                <div

                                                    key={i}

                                                    className="rounded-2xl border border-[#322A54] bg-[#1A1C2D] p-5"

                                                >

                                                    <h3 className="font-semibold text-yellow-400">

                                                        Question {i + 1}

                                                    </h3>

                                                    <p className="mt-3 text-zinc-300">

                                                        {question}

                                                    </p>

                                                </div>

                                            ))}

                                        </div>

                                    )}

                                </div>

                            ))}

                        </div>

                        <div className="mt-10">

                            <MentorChat

                                messages={messages}

                                loading={mentorLoading}

                                ask={ask}

                            />

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="col-span-4">

                        <LessonSidebar />

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}