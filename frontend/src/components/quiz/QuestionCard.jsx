import OptionCard from "./OptionCard";

export default function QuestionCard({

    question,

    selectedAnswer,

    onAnswer,

    disabled = false,

}) {

    if (!question) {

        return null;

    }

    const options = [

        question.optionA,

        question.optionB,

        question.optionC,

        question.optionD,

    ];

    return (

        <div className="rounded-[30px] border border-[#2F2A45] bg-[#171827] p-8">

            {/* Difficulty */}

            <div className="mb-8">

                <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">

                    {question.difficulty}

                </span>

                <h2 className="mt-6 text-3xl font-bold text-white leading-relaxed">

                    {question.question}

                </h2>

                {

                    question.topic && (

                        <p className="mt-3 text-zinc-400">

                            Topic: {question.topic}

                        </p>

                    )

                }

            </div>

            {/* Options */}

            <div className="space-y-5">

                {

                    options.map((option, index) => (

                        <OptionCard

                            key={index}

                            option={option}

                            index={index}

                            selected={selectedAnswer === index}

                            onSelect={onAnswer}

                            disabled={disabled}

                        />

                    ))

                }

            </div>

        </div>

    );

}