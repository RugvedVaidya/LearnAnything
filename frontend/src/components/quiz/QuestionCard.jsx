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

    return (

        <div className="rounded-[30px] border border-[#2F2A45] bg-[#171827] p-8">

            {/* Question */}

            <div className="mb-8">

                <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">

                    {question.difficulty}

                </span>

                <h2 className="mt-6 text-3xl font-bold text-white leading-relaxed">

                    {question.question}

                </h2>

                <p className="mt-3 text-zinc-400">

                    Topic: {question.topic}

                </p>

            </div>

            {/* Options */}

            <div className="space-y-5">

                {

                    question.options.map((option, index) => (

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