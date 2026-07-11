import { motion } from "framer-motion";
import {
    BookOpen,
    Clock3,
    Layers3,
    ArrowRight,
    Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {

    const navigate = useNavigate();

    const progress = 72;

    const difficultyColor = {
        BEGINNER: "bg-green-500/20 text-green-400 border-green-500/30",
        INTERMEDIATE: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        ADVANCED: "bg-red-500/20 text-red-400 border-red-500/30",
    };

    return (

        <motion.div

            whileHover={{
                y: -8,
                scale: 1.015,
            }}

            transition={{
                duration: .25,
            }}

            onClick={() => navigate(`/courses/${course.id}`)}

            className="

                group

                cursor-pointer

                rounded-[30px]

                overflow-hidden

                border

                border-[#312A50]

                bg-[#151827]

                hover:border-violet-500/60

                transition-all

                duration-300

                shadow-[0_20px_60px_rgba(0,0,0,.45)]

            "

        >

            {/* Header */}

            <div className="

                relative

                h-36

                bg-gradient-to-br

                from-violet-600

                via-[#4E3ED9]

                to-[#241B52]

                p-6

            ">

                <div className="absolute right-0 top-0 w-36 h-36 rounded-full bg-white/10 translate-x-10 -translate-y-10"/>

                <div className="flex justify-between items-start">

                    <div className="flex items-center gap-2">

                        <Sparkles
                            size={16}
                            className="text-yellow-300"
                        />

                        <span className="text-sm text-white/90 font-medium">

                            AI Generated

                        </span>

                    </div>

                    <span

                        className={`

                            px-3

                            py-1

                            rounded-full

                            text-xs

                            font-semibold

                            border

                            ${difficultyColor[course.difficulty]}

                        `}

                    >

                        {course.difficulty}

                    </span>

                </div>

            </div>

            {/* Body */}

            <div className="p-6">

                <h2 className="

                    text-2xl

                    font-bold

                    text-white

                    line-clamp-2

                ">

                    {course.title}

                </h2>

                <p className="

                    mt-3

                    text-zinc-400

                    leading-relaxed

                    line-clamp-3

                    min-h-[72px]

                ">

                    {course.description}

                </p>

                {/* Progress */}

                <div className="mt-6">

                    <div className="flex justify-between text-sm">

                        <span className="text-zinc-500">

                            Progress

                        </span>

                        <span className="text-violet-400 font-semibold">

                            {progress}%

                        </span>

                    </div>

                    <div className="

                        mt-2

                        h-2

                        rounded-full

                        bg-zinc-800

                        overflow-hidden

                    ">

                        <div

                            className="

                                h-full

                                rounded-full

                                bg-gradient-to-r

                                from-violet-500

                                to-purple-400

                            "

                            style={{

                                width: `${progress}%`

                            }}

                        />

                    </div>

                </div>

                {/* Stats */}

                <div className="

                    grid

                    grid-cols-3

                    gap-3

                    mt-7

                ">

                    <div className="flex items-center gap-2 text-zinc-300">

                        <Clock3 size={18}/>

                        <span>

                            {course.estimatedHours} hrs

                        </span>

                    </div>

                    <div className="flex items-center gap-2 text-zinc-300">

                        <Layers3 size={18}/>

                        <span>

                            {course.modules.length} Modules

                        </span>

                    </div>

                    <div className="flex items-center gap-2 text-zinc-300">

                        <BookOpen size={18}/>

                        <span>
                            {course.modules.reduce(
                                (total, module) =>
                                    total + (module.chapters?.length || 0),
                                0
                            )} Chapters
                        </span>

                    </div>

                </div>

                {/* Footer */}

                <div className="

                    mt-8

                    pt-5

                    border-t

                    border-zinc-800

                    flex

                    justify-between

                    items-center

                ">

                    <span className="

                        text-violet-400

                        font-semibold

                    ">

                        Continue Learning

                    </span>

                    <ArrowRight

                        className="

                            text-violet-400

                            transition-transform

                            duration-300

                            group-hover:translate-x-2

                        "

                    />

                </div>

            </div>

        </motion.div>

    );

}