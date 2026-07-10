import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
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

    return (

        <div className="flex h-screen bg-slate-950">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 overflow-auto p-8">

                    <div className="max-w-4xl mx-auto">

                        <h1 className="text-4xl font-bold text-white">

                            {lesson.title}

                        </h1>

                        <div className="mt-8 whitespace-pre-wrap text-slate-300 leading-8">

                            {lesson.content}

                        </div>

                    </div>

                </main>

            </div>

        </div>

    );

}