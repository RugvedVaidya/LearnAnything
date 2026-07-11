import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    Clock3,
    BookOpen,
    Sparkles,
    PlayCircle,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../ui/Button";

export default function ModuleAccordion({

    module,

    onGenerate,

    onGenerateLessons,

}) {

    const [open, setOpen] = useState(false);

    const [loadingModule, setLoadingModule] = useState(false);

    const [loadingChapter, setLoadingChapter] = useState(null);

    const navigate = useNavigate();

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

    return (

        <Card className="overflow-hidden">

            {/* HEADER */}

            <button

                onClick={() => setOpen(!open)}

                className="w-full p-8 text-left"

            >

                <div className="flex justify-between items-start">

                    <div className="flex-1">

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">

                                <BookOpen size={22} className="text-white" />

                            </div>

                            <div>

                                <h2 className="text-2xl font-bold text-white">

                                    Module {module.order}

                                </h2>

                                <p className="text-zinc-500">

                                    {module.title}

                                </p>

                            </div>

                        </div>

                        <p className="text-zinc-400 mt-5 leading-7">

                            {module.description}

                        </p>

                        <div className="flex gap-8 mt-6 text-sm text-zinc-400">

                            <div className="flex items-center gap-2">

                                <Clock3 size={18} />

                                {module.estimatedTime} hrs

                            </div>

                            <div className="flex items-center gap-2">

                                <BookOpen size={18} />

                                {module.chapters.length} Chapters

                            </div>

                        </div>

                    </div>

                    <div className="ml-8">

                        {

                            open

                                ? <ChevronDown size={30} />

                                : <ChevronRight size={30} />

                        }

                    </div>

                </div>

            </button>

            <AnimatePresence>

                {

                    open && (

                        <motion.div

                            initial={{
                                opacity:0,
                                height:0,
                            }}

                            animate={{
                                opacity:1,
                                height:"auto",
                            }}

                            exit={{
                                opacity:0,
                                height:0,
                            }}

                            transition={{
                                duration:.25,
                            }}

                            className="border-t border-[#322A54]"

                        >

                            <div className="p-8">

                                {

                                    module.chapters.length === 0 ? (

                                        <div className="rounded-3xl bg-[#171827] border border-[#312A50] p-10 text-center">

                                            <Sparkles

                                                className="mx-auto text-violet-400"

                                                size={44}

                                            />

                                            <h3 className="text-2xl font-bold mt-5">

                                                Chapters Not Generated

                                            </h3>

                                            <p className="text-zinc-400 mt-3">

                                                Let AI generate an optimized learning roadmap.

                                            </p>

                                            <Button

                                                loading={loadingModule}

                                                onClick={handleGenerateModule}

                                                className="mt-8"

                                            >

                                                Generate Chapters

                                            </Button>

                                        </div>

                                    ) : (

                                        <div className="space-y-6">

                                            {

                                                module.chapters.map((chapter)=>(

                                                    <Card

                                                        key={chapter.id}

                                                        className="p-6"

                                                    >

                                                        <div className="flex justify-between items-start">

                                                            <div>

                                                                <h3 className="text-xl font-bold">

                                                                    {chapter.order}. {chapter.title}

                                                                </h3>

                                                                <p className="text-zinc-400 mt-2">

                                                                    {chapter.description}

                                                                </p>

                                                            </div>

                                                            {

                                                                chapter.lessons.length===0 && (

                                                                    <Button

                                                                        loading={loadingChapter===chapter.id}

                                                                        onClick={()=>

                                                                            handleGenerateLessons(chapter.id)

                                                                        }

                                                                    >

                                                                        Generate Lessons

                                                                    </Button>

                                                                )

                                                            }

                                                        </div>

                                                        {

                                                            chapter.lessons.length>0 && (

                                                                <div className="mt-6 space-y-3">

                                                                    {

                                                                        chapter.lessons.map((lesson)=>(

                                                                            <motion.div

                                                                                whileHover={{
                                                                                    x:5,
                                                                                }}

                                                                                key={lesson.id}

                                                                                onClick={()=>navigate(`/lessons/${lesson.id}`)}

                                                                                className="cursor-pointer rounded-2xl bg-[#171827] border border-[#322A54] p-5 hover:border-violet-500 transition"

                                                                            >

                                                                                <div className="flex justify-between items-center">

                                                                                    <div className="flex items-center gap-3">

                                                                                        <PlayCircle

                                                                                            size={20}

                                                                                            className="text-violet-400"

                                                                                        />

                                                                                        <h4 className="font-semibold">

                                                                                            {lesson.order}. {lesson.title}

                                                                                        </h4>

                                                                                    </div>

                                                                                    <span className="text-sm text-zinc-500">

                                                                                        {lesson.readingTime} min

                                                                                    </span>

                                                                                </div>

                                                                                <p className="text-zinc-400 mt-3">

                                                                                    {lesson.summary}

                                                                                </p>

                                                                            </motion.div>

                                                                        ))

                                                                    }

                                                                </div>

                                                            )

                                                        }

                                                    </Card>

                                                ))

                                            }

                                        </div>

                                    )

                                }

                            </div>

                        </motion.div>

                    )

                }

            </AnimatePresence>

        </Card>

    );

}