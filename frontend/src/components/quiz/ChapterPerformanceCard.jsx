import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    BookOpen,
} from "lucide-react";

import AttemptRow from "./AttemptRow";

export default function ChapterPerformanceCard({

    chapter,

}) {

    const [open, setOpen] = useState(true);

    const attempts = chapter.attempts || [];

    const bestScore =

        attempts.length === 0

            ? 0

            : Math.max(

                ...attempts.map(

                    (attempt) => attempt.percentage

                )

            );
console.log("Chapter Attempts:", chapter.title, attempts);
    return (

        <div className="rounded-[28px] border border-[#2F2A45] bg-[#171827] overflow-hidden">

            {/* Header */}

            <button

                onClick={() => setOpen(!open)}

                className="w-full flex items-center justify-between px-8 py-6"

            >

                <div className="flex items-center gap-4">

                    <BookOpen

                        size={24}

                        className="text-violet-400"

                    />

                    <div className="text-left">

                        <h2 className="text-2xl font-bold text-white">

                            {chapter.title}

                        </h2>

                        <p className="mt-1 text-zinc-400">

                            {attempts.length} Attempts

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-8">

                    <div className="text-right">

                        <p className="text-zinc-500">

                            Best Score

                        </p>

                        <h3 className="text-3xl font-bold text-violet-400">

                            {bestScore}%

                        </h3>

                    </div>

                    {

                        open

                            ?

                            <ChevronDown />

                            :

                            <ChevronRight />

                    }

                </div>

            </button>

            {

                open && (

                    <div className="border-t border-[#2F2A45]">

                        {

                            attempts.length === 0

                            ?

                            (

                                <div className="py-10 text-center text-zinc-500">

                                    No quizzes attempted yet.

                                </div>

                            )

                            :

                            (

                                attempts.map((attempt)=>(

                                    <AttemptRow

                                        key={attempt.id}

                                        attempt={attempt}

                                    />

                                ))

                            )

                        }

                    </div>

                )

            }

        </div>

    );

}