import {
    ArrowRight,
    BookOpen,
    PlayCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import Button from "../ui/Button";

export default function ContinueLearning({

    dashboard,

    onGenerate,

}) {

    const navigate = useNavigate();

    const continueLesson = dashboard?.continueLesson;

    const progress = dashboard?.percentage ?? 0;

    return (

        <Card className="p-8">

            <div className="flex justify-between items-start">

                <div>

                    <h2 className="text-3xl font-bold">

                        Continue Learning

                    </h2>

                    <p className="text-zinc-500 mt-2">

                        Pick up exactly where you left off.

                    </p>

                </div>

                <Button onClick={onGenerate}>

                    Generate Course

                </Button>

            </div>

            {

                continueLesson ? (

                    <div className="mt-8 rounded-2xl bg-[#1F1A36] border border-[#332C58] p-6">

                        <div className="flex justify-between items-start">

                            <div>

                                <div className="flex items-center gap-2 text-violet-400">

                                    <BookOpen size={18} />

                                    <span className="text-sm font-medium">

                                        {continueLesson.courseTitle}

                                    </span>

                                </div>

                                <h3 className="text-2xl font-bold mt-3">

                                    {continueLesson.lessonTitle}

                                </h3>

                                <p className="text-zinc-400 mt-2">

                                    {continueLesson.moduleTitle}

                                </p>

                                <p className="text-zinc-500 mt-1">

                                    {continueLesson.chapterTitle}

                                </p>

                            </div>

                            <Button

                                onClick={() =>

                                    navigate(`/lessons/${continueLesson.lessonId}`)

                                }

                            >

                                <PlayCircle size={18} />

                                Resume

                            </Button>

                        </div>

                    </div>

                ) : (

                    <div className="mt-8 rounded-2xl border border-emerald-600/30 bg-emerald-500/10 p-8 text-center">

                        <h3 className="text-2xl font-bold text-emerald-400">

                            🎉 Congratulations!

                        </h3>

                        <p className="text-zinc-400 mt-3">

                            You've completed every lesson across all your courses.

                        </p>

                    </div>

                )

            }

            <div className="mt-8">

                <div className="flex justify-between mb-3">

                    <span className="text-zinc-400">

                        Overall Progress

                    </span>

                    <span className="font-semibold text-white">

                        {progress}%

                    </span>

                </div>

                <ProgressBar value={progress} />

            </div>

            <div className="mt-6 flex justify-between items-center text-sm">

                <span className="text-zinc-500">

                    {

                        dashboard

                            ? `${dashboard.completedLessons} of ${dashboard.totalLessons} lessons completed`

                            : ""

                    }

                </span>

                {

                    continueLesson && (

                        <button

                            onClick={() =>

                                navigate(`/courses/${continueLesson.courseId}`)

                            }

                            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition"

                        >

                            View Course

                            <ArrowRight size={16} />

                        </button>

                    )

                }

            </div>

        </Card>

    );

}