import { useParams } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Loader from "../components/common/Loader";

import ModuleAccordion from "../components/course/ModuleAccordion";

import CourseHero from "../components/course/CourseHero";
import CourseStats from "../components/course/CourseStats";

import useCourse from "../hooks/useCourse";

export default function CourseDetails() {

    const { courseId } = useParams();

    const {

        course,

        loading,

        generateChapters,

        generateLessons,

    } = useCourse(courseId);

    if (loading)
        return <Loader />;

    if (!course)
        return <div>Course not found.</div>;

    return (

        <AppLayout>

            <div className="max-w-7xl mx-auto">

                <CourseHero

                    course={course}

                />

                <CourseStats

                    course={course}

                />

                <section className="mt-12">

                    <h2 className="text-3xl font-bold mb-8">

                        Course Roadmap

                    </h2>

                    <div className="space-y-6">

                        {

                            course.modules.map((module)=>(

                                <ModuleAccordion

                                    key={module.id}

                                    module={module}

                                    onGenerate={generateChapters}

                                    onGenerateLessons={generateLessons}

                                />

                            ))

                        }

                    </div>

                </section>

            </div>

        </AppLayout>

    );

}