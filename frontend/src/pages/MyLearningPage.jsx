import { useEffect, useState } from "react";

import { fetchMyLearning } from "../services/learning.service";

import ContinueLearningCard from "../components/myLearning/ContinueLearningCard";
import ActiveCourseCard from "../components/myLearning/ActiveCourseCard";
import CompletedCourseCard from "../components/myLearning/CompletedCourseCard";

import SectionTitle from "../components/ui/SectionTitle";

export default function MyLearningPage() {
    const [loading, setLoading] = useState(true);

    const [learning, setLearning] = useState({
        continueLearning: null,
        activeCourses: [],
        completedCourses: [],
    });

    useEffect(() => {
        loadLearning();
    }, []);

    const loadLearning = async () => {
        try {
            const response = await fetchMyLearning();

            console.log("My Learning API:", response);

            setLearning(response.data);
        } catch (err) {
            console.error("Failed to fetch learning data:", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-zinc-400 text-lg">
                Loading your learning...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0F0B1E] text-white">
            <div className="max-w-7xl mx-auto px-8 py-10">

                {/* Header */}

                <div className="mb-12">
                    <h1 className="text-5xl font-bold">
                        My Learning
                    </h1>

                    <p className="text-zinc-400 mt-3 text-lg">
                        Continue your learning journey and track your progress.
                    </p>
                </div>

                {/* Continue Learning */}

                {learning.continueLearning && (
                    <>
                        <SectionTitle
                            title="Continue Learning"
                            subtitle="Jump back into your current course."
                        />

                        <ContinueLearningCard
                            course={learning.continueLearning}
                        />

                        <div className="h-14" />
                    </>
                )}

                {/* Active Courses */}

                <SectionTitle
                    title="Active Courses"
                    subtitle={`${learning.activeCourses.length} course${
                        learning.activeCourses.length !== 1 ? "s" : ""
                    } currently in progress.`}
                />

                {learning.activeCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {learning.activeCourses.map((course) => (
                            <ActiveCourseCard
                                key={course.id}
                                course={course}
                            />
                        ))}

                    </div>
                ) : (
                    <div className="rounded-3xl border border-[#3C335F] bg-[#1B1630] py-16 text-center text-zinc-400">
                        No active courses yet.
                    </div>
                )}

                {/* Completed Courses */}

                <div className="mt-16">

                    <SectionTitle
                        title="Completed Courses"
                        subtitle={`${learning.completedCourses.length} course${
                            learning.completedCourses.length !== 1 ? "s" : ""
                        } completed.`}
                    />

                    {learning.completedCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                            {learning.completedCourses.map((course) => (
                                <CompletedCourseCard
                                    key={course.id}
                                    course={course}
                                />
                            ))}

                        </div>
                    ) : (
                        <div className="rounded-3xl border border-[#3C335F] bg-[#1B1630] py-16 text-center text-zinc-400">
                            Complete a course to see it here.
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}