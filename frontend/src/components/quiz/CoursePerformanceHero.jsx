import { Trophy } from "lucide-react";

export default function CoursePerformanceHero({ course }) {

    return (

        <div className="rounded-[30px] border border-[#2F2A45] bg-[#171827] p-10">

            <div className="flex items-center gap-5">

                <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">

                    <Trophy
                        size={36}
                        className="text-white"
                    />

                </div>

                <div>

                    <p className="text-violet-400 font-semibold">

                        Course Performance

                    </p>

                    <h1 className="mt-2 text-5xl font-bold text-white">

                        {course.title}

                    </h1>

                    <p className="mt-3 text-zinc-400">

                        Review all quiz attempts, monitor your progress,
                        and identify areas for improvement.

                    </p>

                </div>

            </div>

        </div>

    );

}