import {
    Sparkles,
    Clock3,
    BookOpen,
} from "lucide-react";

import Button from "../ui/Button";

export default function CourseHero({

    course,

}) {

    return (

        <div className="rounded-[32px] overflow-hidden bg-gradient-to-br from-[#5B42F3] via-[#4533C8] to-[#1D173A] p-10 relative">

            <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-white/10 translate-x-24 -translate-y-24"/>

            <div className="relative z-10">

                <div className="flex items-center gap-3 mb-5">

                    <Sparkles
                        className="text-yellow-300"
                        size={18}
                    />

                    <span className="text-white/90">

                        AI Generated Learning Path

                    </span>

                </div>

                <h1 className="text-5xl font-bold text-white max-w-4xl">

                    {course.title}

                </h1>

                <p className="mt-5 text-white/80 max-w-3xl leading-8">

                    {course.description}

                </p>

                <div className="flex gap-8 mt-8">

                    <div className="flex items-center gap-2 text-white">

                        <Clock3 size={18}/>

                        {course.estimatedHours} Hours

                    </div>

                    <div className="flex items-center gap-2 text-white">

                        <BookOpen size={18}/>

                        {course.modules.length} Modules

                    </div>

                </div>

                <div className="mt-10 flex gap-4">

                    <Button>

                        Continue Learning

                    </Button>

                    <Button variant="secondary">

                        Ask AI Mentor

                    </Button>

                </div>

            </div>

        </div>

    );

}