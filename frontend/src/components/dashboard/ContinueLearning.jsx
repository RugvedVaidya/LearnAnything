import {
    ArrowRight,
    BookOpen,
    PlayCircle,
} from "lucide-react";

import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import Button from "../ui/Button";

export default function ContinueLearning({

    progress = 72,

    onGenerate,

}) {

    return (

        <Card className="p-8">

            <div className="flex justify-between items-start">

                <div>

                    <h2 className="text-3xl font-bold">

                        Continue Learning

                    </h2>

                    <p className="text-zinc-500 mt-2">

                        Pick up where you left off.

                    </p>

                </div>

                <Button onClick={onGenerate}>

                    Generate Course

                </Button>

            </div>

            {/* Current Course */}

            <div className="mt-8 rounded-2xl bg-[#1F1A36] border border-[#332C58] p-6">

                <div className="flex justify-between items-start">

                    <div>

                        <div className="flex items-center gap-2 text-violet-400">

                            <BookOpen size={18} />

                            <span className="text-sm font-medium">

                                Current Course

                            </span>

                        </div>

                        <h3 className="text-2xl font-bold mt-3">

                            Machine Learning Interview Roadmap

                        </h3>

                        <p className="text-zinc-400 mt-2">

                            Continue from Module 3 • Neural Networks

                        </p>

                    </div>

                    <Button>

                        <PlayCircle size={18} />

                        Continue

                    </Button>

                </div>

            </div>

            {/* Progress */}

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

            {/* Footer */}

            <div className="mt-6 flex justify-between items-center text-sm">

                <span className="text-zinc-500">

                    Estimated time remaining: 12 hrs

                </span>

                <button
                    className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition"
                >

                    View Full Roadmap

                    <ArrowRight size={16} />

                </button>

            </div>

        </Card>

    );

}