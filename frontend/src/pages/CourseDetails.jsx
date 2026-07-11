import { useParams } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Loader from "../components/common/Loader";

import ModuleAccordion from "../components/course/ModuleAccordion";
import CourseHero from "../components/course/CourseHero";
import CourseStats from "../components/course/CourseStats";
import CourseSidebar from "../components/course/CourseSidebar";

import useCourse from "../hooks/useCourse";

export default function CourseDetails() {

    const { courseId } = useParams();

    const {
        course,
        loading,
        generateChapters,
        generateLessons,
    } = useCourse(courseId);

    if (loading) {
        return <Loader />;
    }

    if (!course) {
        return (
            <AppLayout>
                <div className="flex justify-center items-center h-[70vh]">
                    <h1 className="text-3xl font-bold text-white">
                        Course Not Found
                    </h1>
                </div>
            </AppLayout>
        );
    }

    return (

        <AppLayout>

            <div className="max-w-[1600px] mx-auto">

                {/* HERO */}

                <CourseHero course={course} />

                {/* MAIN GRID */}

                <div className="grid grid-cols-12 gap-8 mt-8">

                    {/* LEFT */}

                    <div className="col-span-8">

                        <CourseStats course={course} />

                        <section className="mt-10">

                            <div className="flex items-center justify-between mb-8">

                                <div>

                                    <h2 className="text-3xl font-bold text-white">

                                        Course Roadmap

                                    </h2>

                                    <p className="text-zinc-400 mt-2">

                                        Follow the roadmap module by module.

                                    </p>

                                </div>

                            </div>

                            <div className="space-y-6">

                                {

                                    course.modules.length === 0 ? (

                                        <div className="rounded-3xl border border-[#312A50] bg-[#171827] p-10 text-center">

                                            <p className="text-zinc-400">

                                                No modules available.

                                            </p>

                                        </div>

                                    ) : (

                                        course.modules.map((module) => (

                                            <ModuleAccordion

                                                key={module.id}

                                                module={module}

                                                onGenerate={generateChapters}

                                                onGenerateLessons={generateLessons}

                                            />

                                        ))

                                    )

                                }

                            </div>

                        </section>

                    </div>

                    {/* RIGHT */}

                    <div className="col-span-4">

                        <CourseSidebar />

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}