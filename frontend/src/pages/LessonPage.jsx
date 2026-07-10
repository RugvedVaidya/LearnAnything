import { useParams } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Loader from "../components/common/Loader";

import MarkdownRenderer from "../components/lesson/MarkdownRenderer";

import useLesson from "../hooks/useLesson";

export default function LessonPage() {

    const { lessonId } = useParams();

    const {
        lesson,
        loading,
    } = useLesson(lessonId);

    if (loading) {
        return <Loader />;
    }

    if (!lesson) {
        return (
            <div className="h-screen flex items-center justify-center bg-slate-950 text-white">
                Lesson not found.
            </div>
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

        <div className="flex h-screen bg-slate-950">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 overflow-auto p-10">

                    <div className="max-w-5xl mx-auto">

                        <h1 className="text-5xl font-bold text-white">

                            {lessonData.lesson_title || lesson.title}

                        </h1>

                        {(lessonData.summary || lesson.summary) && (

                            <p className="text-slate-400 mt-4 text-lg leading-8">

                                {lessonData.summary || lesson.summary}

                            </p>

                        )}

                        <div className="flex flex-wrap gap-6 mt-8">

                            <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4">

                                <p className="text-slate-400 text-sm">

                                    Difficulty

                                </p>

                                <p className="text-white font-semibold">

                                    {lessonData.difficulty || lesson.difficulty}

                                </p>

                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4">

                                <p className="text-slate-400 text-sm">

                                    Reading Time

                                </p>

                                <p className="text-white font-semibold">

                                    {lesson.readingTime} mins

                                </p>

                            </div>

                        </div>

                        <div className="space-y-10 mt-12">

                            {(lessonData.content || []).map((section, index) => (

                                <div
                                    key={index}
                                    className="bg-slate-900 border border-slate-800 rounded-xl p-8"
                                >

                                    <h2 className="text-3xl font-bold text-blue-400 mb-6">

                                        {section.section}

                                    </h2>

                                    {section.text && (

                                        <MarkdownRenderer
                                            content={section.text}
                                        />

                                    )}

                                    {section.objectives && (

                                        <ul className="list-disc ml-6 mt-5 space-y-3 text-slate-300">

                                            {section.objectives.map((item, i) => (

                                                <li key={i}>

                                                    {item}

                                                </li>

                                            ))}

                                        </ul>

                                    )}

                                    {section.points && (

                                        <ul className="list-disc ml-6 mt-5 space-y-3 text-slate-300">

                                            {section.points.map((item, i) => (

                                                <li key={i}>

                                                    {item}

                                                </li>

                                            ))}

                                        </ul>

                                    )}

                                    {section.code && (

                                        <div className="mt-6">

                                            <MarkdownRenderer
                                                content={`\`\`\`java
${section.code}
\`\`\``}
                                            />

                                        </div>

                                    )}

                                    {section.questions && (

                                        <div className="space-y-4 mt-6">

                                            {section.questions.map((question, i) => (

                                                <div
                                                    key={i}
                                                    className="bg-slate-950 border border-slate-700 rounded-lg p-5"
                                                >

                                                    <p className="text-yellow-400 font-semibold">

                                                        Question {i + 1}

                                                    </p>

                                                    <p className="text-slate-300 mt-2">

                                                        {question}

                                                    </p>

                                                </div>

                                            ))}

                                        </div>

                                    )}

                                </div>

                            ))}

                        </div>

                    </div>

                </main>

            </div>

        </div>

    );

}