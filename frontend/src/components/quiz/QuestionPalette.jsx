import clsx from "clsx";

export default function QuestionPalette({

    questions,

    currentQuestion,

    answers,

    onJump,

}) {

    return (

        <div className="rounded-[30px] border border-[#2F2A45] bg-[#171827] p-6">

            <h2 className="text-xl font-bold text-white mb-6">

                Question Navigator

            </h2>

            <div className="grid grid-cols-5 gap-3">

                {

                    questions.map((question, index) => {

                        const answered =
                            answers[question.id] !== undefined;

                        const current =
                            index === currentQuestion;

                        return (

                            <button

                                key={question.id}

                                onClick={() => onJump(index)}

                                className={clsx(

                                    "h-12 w-12 rounded-xl font-semibold transition-all duration-300",

                                    current
                                        ? "bg-violet-600 text-white border border-violet-400 shadow-lg shadow-violet-500/30"

                                        : answered
                                        ? "bg-green-600 text-white hover:bg-green-500"
                                        : "bg-[#23253A] text-zinc-300 hover:bg-[#2D3150]"

                                )}

                            >

                                {index + 1}

                            </button>

                        );

                    })

                }

            </div>

            <div className="mt-8 space-y-3 text-sm">

                <div className="flex items-center gap-3">

                    <div className="w-4 h-4 rounded bg-violet-600"/>

                    <span className="text-zinc-400">

                        Current Question

                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <div className="w-4 h-4 rounded bg-green-600"/>

                    <span className="text-zinc-400">

                        Answered

                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <div className="w-4 h-4 rounded bg-[#23253A]"/>

                    <span className="text-zinc-400">

                        Not Answered

                    </span>

                </div>

            </div>

        </div>

    );

}