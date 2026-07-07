import { useParams } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Loader from "../components/common/Loader";
import ModuleAccordion from "../components/course/ModuleAccordion";

import useCourse from "../hooks/useCourse";

export default function CourseDetails() {

    const { courseId } = useParams();

    const {
        course,
        loading,
    } = useCourse(courseId);

    if (loading) {
        return <Loader />;
    }

    if (!course) {
        return (
            <div className="h-screen flex items-center justify-center bg-slate-950 text-white">
                Course not found.
            </div>
        );
    }

    return (

        <div className="flex h-screen bg-slate-950">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 overflow-auto p-8">

                    <div className="max-w-6xl mx-auto">

                        <h1 className="text-4xl font-bold text-white">

                            {course.title}

                        </h1>

                        <p className="text-slate-400 mt-3 text-lg">

                            {course.description}

                        </p>

                        <div className="flex flex-wrap gap-8 mt-8">

                            <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4">

                                <p className="text-slate-400 text-sm">

                                    Difficulty

                                </p>

                                <p className="text-white font-semibold mt-1">

                                    {course.difficulty}

                                </p>

                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4">

                                <p className="text-slate-400 text-sm">

                                    Estimated Hours

                                </p>

                                <p className="text-white font-semibold mt-1">

                                    {course.estimatedHours} Hours

                                </p>

                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4">

                                <p className="text-slate-400 text-sm">

                                    Modules

                                </p>

                                <p className="text-white font-semibold mt-1">

                                    {course.modules.length}

                                </p>

                            </div>

                        </div>

                        <div className="mt-12">

                            <h2 className="text-3xl font-bold text-white mb-6">

                                Course Modules

                            </h2>

                            <div className="space-y-5">

                                {course.modules.length === 0 ? (

                                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">

                                        <p className="text-slate-400">

                                            No modules available.

                                        </p>

                                    </div>

                                ) : (

                                    course.modules.map((module) => (

                                        <ModuleAccordion
                                            key={module.id}
                                            module={module}
                                        />

                                    ))

                                )}

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </div>

    );

}