import {
    Trophy,
    BrainCircuit,
} from "lucide-react";

import QuizModuleAccordion from "./QuizModuleAccordion";

export default function QuizCourseCard({

    course,

    onCourseQuiz,

    onChapterQuiz,

}) {

    return (

        <div className="rounded-[30px] bg-[#151827] border border-[#2F2A45] overflow-hidden">

            {/* Header */}

            <div className="p-8 border-b border-[#2F2A45]">

                <div className="flex justify-between items-center">

                    <div>

                        <h2 className="text-3xl font-bold text-white">

                            {course.title}

                        </h2>

                        <p className="text-zinc-400 mt-2">

                            {course.modules.length} Modules

                        </p>

                    </div>

                    <button

                        onClick={() => onCourseQuiz(course.id)}

                        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 hover:brightness-110 transition flex items-center gap-3"

                    >

                        <Trophy size={18} />

                        Final Assessment

                    </button>

                </div>

            </div>

            {/* Modules */}

            <div className="p-6 space-y-5">

                {

                    course.modules.map((module)=>(

                        <QuizModuleAccordion

                            key={module.id}

                            module={module}

                            onChapterQuiz={onChapterQuiz}

                        />

                    ))

                }

            </div>

        </div>

    );

}