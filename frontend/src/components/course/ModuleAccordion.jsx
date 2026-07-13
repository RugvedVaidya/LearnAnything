import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    ChevronDown,
    ChevronRight,
    Clock3,
    BookOpen,
    Sparkles,
    PlayCircle,
    CheckCircle2,
    Circle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function ModuleAccordion({

    module,

    progress,

    onGenerate,

    onGenerateLessons,

}) {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const [loadingModule, setLoadingModule] = useState(false);

    const [loadingChapter, setLoadingChapter] = useState(null);

    const handleGenerateModule = async () => {

        try {

            setLoadingModule(true);

            await onGenerate(module.id);

            setOpen(true);

        } finally {

            setLoadingModule(false);

        }

    };

    const handleGenerateLessons = async (chapterId) => {

        try {

            setLoadingChapter(chapterId);

            await onGenerateLessons(chapterId);

        } finally {

            setLoadingChapter(null);

        }

    };

    const getLessonStatus = (lessonId) => {

        if (!progress?.lessonStatuses) {

            return {

                completed: false,

                current: false,

            };

        }

        return (

            progress.lessonStatuses.find(

                lesson => lesson.id === lessonId

            ) || {

                completed: false,

                current: false,

            }

        );

    };

    return (

        <motion.div

            layout

            className="rounded-[30px] overflow-hidden border border-[#2F2A45] bg-[#141520]"

        >

            <button

                onClick={() => setOpen(!open)}

                className="w-full p-7 flex justify-between items-center"

            >

                <div className="flex items-center gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">

                        <BookOpen className="text-white" />

                    </div>

                    <div className="text-left">

                        <div className="flex items-center gap-3">

                            <h2 className="text-2xl font-bold">

                                Module {module.order}

                            </h2>

                            <Sparkles

                                size={16}

                                className="text-yellow-400"

                            />

                        </div>

                        <p className="text-lg text-zinc-300 mt-2">

                            {module.title}

                        </p>

                        <p className="text-zinc-500 mt-2">

                            {module.description}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-6">

                    <div className="text-right">

                        <div className="flex items-center gap-2 justify-end text-zinc-400">

                            <Clock3 size={18} />

                            {module.estimatedTime} hrs

                        </div>

                        <p className="text-sm text-zinc-500 mt-2">

                            {module.chapters.length} Chapters

                        </p>

                    </div>

                    {

                        open

                            ? <ChevronDown />

                            : <ChevronRight />

                    }

                </div>

            </button>

            <AnimatePresence>

                {

                    open && (

                        <motion.div

                            initial={{

                                opacity: 0,

                                height: 0,

                            }}

                            animate={{

                                opacity: 1,

                                height: "auto",

                            }}

                            exit={{

                                opacity: 0,

                                height: 0,

                            }}

                            className="px-7 pb-7"

                        >

                            {

                                module.chapters.length === 0 ? (

                                    <div className="rounded-2xl bg-[#191B29] border border-[#322A54] p-8 text-center">

                                        <h3 className="text-xl font-semibold">

                                            Generate Module Content

                                        </h3>

                                        <p className="text-zinc-400 mt-3">

                                            AI will create chapters for this module.

                                        </p>

                                        <button

                                            onClick={handleGenerateModule}

                                            disabled={loadingModule}

                                            className="mt-6 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition"

                                        >

                                            {

                                                loadingModule

                                                    ? "Generating..."

                                                    : "Generate Chapters"

                                            }

                                        </button>

                                    </div>

                                ) : (

                                    <div className="space-y-6">

                                        {

                                            module.chapters.map((chapter) => (

                                                <div

                                                    key={chapter.id}

                                                    className="rounded-2xl border border-[#322A54] bg-[#191B29] p-6"

                                                >

                                                    <div className="flex justify-between items-start">

                                                        <div>

                                                            <h3 className="text-xl font-semibold">

                                                                Chapter {chapter.order}

                                                            </h3>

                                                            <p className="text-lg mt-2">

                                                                {chapter.title}

                                                            </p>

                                                            <p className="text-zinc-500 mt-2">

                                                                {chapter.description}

                                                            </p>

                                                        </div>

                                                        {

                                                            chapter.lessons.length === 0 && (

                                                                <button

                                                                    onClick={() => handleGenerateLessons(chapter.id)}

                                                                    disabled={loadingChapter === chapter.id}

                                                                    className="px-5 py-2 rounded-xl bg-green-600 hover:bg-green-700"

                                                                >

                                                                    {

                                                                        loadingChapter === chapter.id

                                                                            ? "Generating..."

                                                                            : "Generate Lessons"

                                                                    }

                                                                </button>

                                                            )

                                                        }

                                                    </div>

                                                    {

                                                        chapter.lessons.length > 0 && (

                                                            <div className="mt-6 space-y-4">
                                        {

                                            chapter.lessons.map((lesson) => {

                                                const status = getLessonStatus(lesson.id);

                                                return (

                                                    <motion.div

                                                        whileHover={{
                                                            x: 5,
                                                        }}

                                                        key={lesson.id}

                                                        onClick={() => navigate(`/lessons/${lesson.id}`)}

                                                        className={`

                                                            cursor-pointer

                                                            rounded-2xl

                                                            p-5

                                                            border

                                                            transition-all

                                                            duration-300

                                                            ${

                                                                status.completed

                                                                    ? "border-emerald-500 bg-emerald-500/10"

                                                                    : status.current

                                                                    ? "border-violet-500 bg-violet-500/10"

                                                                    : "border-[#322A54] bg-[#171827] hover:border-violet-500"

                                                            }

                                                        `}

                                                    >

                                                        <div className="flex justify-between items-center">

                                                            <div className="flex items-start gap-4">

                                                                {

                                                                    status.completed ? (

                                                                        <CheckCircle2

                                                                            size={22}

                                                                            className="text-emerald-400 mt-1"

                                                                        />

                                                                    )

                                                                    : status.current ? (

                                                                        <PlayCircle

                                                                            size={22}

                                                                            className="text-violet-400 mt-1"

                                                                        />

                                                                    )

                                                                    : (

                                                                        <Circle

                                                                            size={18}

                                                                            className="text-zinc-500 mt-1"

                                                                        />

                                                                    )

                                                                }

                                                                <div>

                                                                    <h4 className="font-semibold text-white">

                                                                        Lesson {lesson.order}: {lesson.title}

                                                                    </h4>

                                                                    <p className="text-zinc-400 mt-2">

                                                                        {lesson.summary}

                                                                    </p>

                                                                </div>

                                                            </div>

                                                            <div className="text-right">

                                                                <div className="flex items-center gap-2 justify-end text-zinc-400">

                                                                    <Clock3 size={16} />

                                                                    {lesson.readingTime} min

                                                                </div>

                                                                <p

                                                                    className={`

                                                                        mt-3

                                                                        text-xs

                                                                        font-semibold

                                                                        ${

                                                                            status.completed

                                                                                ? "text-emerald-400"

                                                                                : status.current

                                                                                ? "text-violet-400"

                                                                                : "text-zinc-500"

                                                                        }

                                                                    `}

                                                                >

                                                                    {

                                                                        status.completed

                                                                            ? "✓ Completed"

                                                                            : status.current

                                                                            ? "▶ Continue"

                                                                            : "Upcoming"

                                                                    }

                                                                </p>

                                                            </div>

                                                        </div>

                                                    </motion.div>

                                                );

                                            })

                                        }

                                    </div>

                                )

                            }

                        </div>

                    ))

                }

            </div>

        )

    }

</motion.div>

                    )

                }

            </AnimatePresence>

        </motion.div>

    );

}