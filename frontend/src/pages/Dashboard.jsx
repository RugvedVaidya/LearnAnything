import { useState } from "react";

import AppLayout from "../layouts/AppLayout";

import Loader from "../components/common/Loader";
import CourseCard from "../components/course/CourseCard";
import GenerateCourseModal from "../components/course/GenerateCourseModal";

import Hero from "../components/dashboard/Hero";
import StatsGrid from "../components/dashboard/StatsGrid";
import ContinueLearning from "../components/dashboard/ContinueLearning";
import MentorCard from "../components/dashboard/MentorCard";
import QuickActions from "../components/dashboard/QuickActions";
import AchievementCard from "../components/dashboard/AchievementCard";

import useCourses from "../hooks/useCourses";
import useDashboard from "../hooks/useDashboard";

export default function Dashboard() {

    const [open, setOpen] = useState(false);

    const {
        courses,
        loading,
        generate,
        generating,
    } = useCourses();

    const handleGenerate = async (data) => {

        await generate(data);

        setOpen(false);

    };

    const {

        dashboard,

        loading: dashboardLoading,

    } = useDashboard();

    if (loading || dashboardLoading) {

        return <Loader />;

    }

    return (

        <AppLayout>

            {/* Greeting */}

            <Hero />

            {/* Main Grid */}

            <div className="grid grid-cols-12 gap-8 mt-6">

                {/* LEFT */}

                <div className="col-span-8 space-y-6">

                    <ContinueLearning

                        dashboard={dashboard}
                        onGenerate={() => setOpen(true)}

                    />

                    <StatsGrid

                        dashboard = {dashboard}

                    />

                    <div>

                        <div className="flex items-end justify-between mb-6">

                            <div>

                                <h2 className="text-3xl font-bold">

                                    My Courses

                                </h2>

                                <p className="text-zinc-400 mt-2">

                                    Continue where you left off.

                                </p>

                            </div>

                        </div>

                        {

                            courses.length === 0 ? (

                                <div className="rounded-[30px] border border-[#312A50] bg-[#151827] p-16 text-center">

                                    <h2 className="text-3xl font-bold">

                                        No Courses Yet

                                    </h2>

                                    <p className="text-zinc-400 mt-3">

                                        Generate your first AI powered roadmap.

                                    </p>

                                </div>

                            ) : (

                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                                    {

                                        courses.map((course) => (

                                            <CourseCard

                                                key={course.id}

                                                course={course}

                                            />

                                        ))

                                    }

                                </div>

                            )

                        }

                    </div>

                </div>

                {/* RIGHT */}

                <div className="col-span-4 space-y-6">

                    <MentorCard />

                    <QuickActions

                        onGenerate={() => setOpen(true)}

                    />

                    <AchievementCard />

                </div>

            </div>

            <GenerateCourseModal

                open={open}

                loading={generating}

                onClose={() => setOpen(false)}

                onGenerate={handleGenerate}

            />

        </AppLayout>

    );

}