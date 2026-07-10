import { useParams } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Loader from "../components/common/Loader";

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

    let lessonData = null;

    try {

        lessonData = JSON.parse(lesson.content);

    } catch {

        lessonData = {
            lesson_title: lesson.title,
            summary: lesson.summary,
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

                        <p className="text-slate-400 mt-4 text-lg leading-8">

                            {lessonData.summary || lesson.summary}

                        </p>

                        <div className="flex gap-8 mt-8">

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

                        <div className="space-y-8 mt-12">

                            {(lessonData.content || []).map((section, index) => (

                                <div
                                    key={index}
                                    className="bg-slate-900 border border-slate-800 rounded-xl p-8"
                                >

                                    <h2 className="text-3xl font-bold text-blue-400 mb-6">

                                        {section.section}

                                    </h2>

                                    {section.text && (

                                        <p className="text-slate-300 leading-8 whitespace-pre-wrap">

                                            {section.text}

                                        </p>

                                    )}

                                    {section.objectives && (

                                        <ul className="list-disc ml-6 mt-4 space-y-3 text-slate-300">

                                            {section.objectives.map((item, i) => (

                                                <li key={i}>

                                                    {item}

                                                </li>

                                            ))}

                                        </ul>

                                    )}

                                    {section.points && (

                                        <ul className="list-disc ml-6 mt-4 space-y-3 text-slate-300">

                                            {section.points.map((item, i) => (

                                                <li key={i}>

                                                    {item}

                                                </li>

                                            ))}

                                        </ul>

                                    )}

                                    {section.questions && (

                                        <div className="mt-5 space-y-4">

                                            {section.questions.map((q, i) => (

                                                <div
                                                    key={i}
                                                    className="bg-slate-950 border border-slate-700 rounded-lg p-4"
                                                >

                                                    <p className="font-semibold text-yellow-400">

                                                        Q{i + 1}. {q}

                                                    </p>

                                                </div>

                                            ))}

                                        </div>

                                    )}

                                    {section.code && (

                                        <pre className="mt-5 bg-black rounded-lg p-5 overflow-x-auto text-green-400">

                                            <code>

                                                {section.code}

                                            </code>

                                        </pre>

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