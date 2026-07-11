import { useState } from "react";
import {
    BookOpen,
    Clock3,
    Flame,
    Sparkles,
    TrendingUp,
} from "lucide-react";

import AppLayout from "../layouts/AppLayout";

import Loader from "../components/common/Loader";
import CourseCard from "../components/course/CourseCard";
import GenerateCourseModal from "../components/course/GenerateCourseModal";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";

import useCourses from "../hooks/useCourses";

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

    if (loading) {

        return <Loader />;

    }

    return (

        <AppLayout>

            {/* HERO */}

            <div className="mb-10">

                <h1 className="text-5xl font-bold text-white">

                    Welcome Back 👋

                </h1>

                <p className="text-zinc-400 mt-3 text-lg">

                    Continue your AI learning journey.

                </p>

            </div>

            {/* TOP STATS */}

            <div className="grid grid-cols-4 gap-6 mb-10">

                <Card className="p-6">

                    <BookOpen className="text-violet-400 mb-4" />

                    <p className="text-zinc-400">

                        Courses

                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        {courses.length}

                    </h2>

                </Card>

                <Card className="p-6">

                    <Clock3 className="text-blue-400 mb-4" />

                    <p className="text-zinc-400">

                        Hours

                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        42

                    </h2>

                </Card>

                <Card className="p-6">

                    <Flame className="text-orange-400 mb-4" />

                    <p className="text-zinc-400">

                        Streak

                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        16 Days

                    </h2>

                </Card>

                <Card className="p-6">

                    <TrendingUp className="text-green-400 mb-4" />

                    <p className="text-zinc-400">

                        Progress

                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        72%

                    </h2>

                </Card>

            </div>

            {/* CONTINUE LEARNING */}

            <Card className="p-8 mb-10">

                <div className="flex justify-between items-center">

                    <div>

                        <h2 className="text-2xl font-bold">

                            Continue Learning

                        </h2>

                        <p className="text-zinc-400 mt-2">

                            Keep your momentum going.

                        </p>

                    </div>

                    <Button onClick={() => setOpen(true)}>

                        <Sparkles size={18} />

                        Generate Course

                    </Button>

                </div>

                <div className="mt-6">

                    <ProgressBar value={72} />

                </div>

            </Card>

            {/* COURSES */}

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h2 className="text-3xl font-bold">

                        My Courses

                    </h2>

                    <p className="text-zinc-400 mt-2">

                        AI generated personalized learning paths.

                    </p>

                </div>

            </div>

            {

                courses.length === 0 ? (

                    <Card className="p-16 text-center">

                        <Sparkles
                            size={60}
                            className="mx-auto text-violet-400"
                        />

                        <h2 className="text-3xl font-bold mt-8">

                            No Courses Yet

                        </h2>

                        <p className="text-zinc-400 mt-4">

                            Generate your first AI course and start learning.

                        </p>

                        <Button
                            className="mt-8"
                            onClick={() => setOpen(true)}
                        >

                            Generate First Course

                        </Button>

                    </Card>

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

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

            <GenerateCourseModal

                open={open}

                loading={generating}

                onClose={() => setOpen(false)}

                onGenerate={handleGenerate}

            />

        </AppLayout>

    );

}