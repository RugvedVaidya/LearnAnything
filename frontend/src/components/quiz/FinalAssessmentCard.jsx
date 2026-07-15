import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

import Button from "../ui/Button";

export default function AttemptRow({

    attempt,

}) {

    const navigate = useNavigate();

    const date = new Date(

        attempt.submittedAt

    ).toLocaleString();

    return (

        <div className="flex items-center justify-between px-8 py-6 border-b border-[#2F2A45] last:border-b-0">

            {/* Left */}

            <div>

                <h3 className="text-xl font-semibold text-white">

                    Attempt

                </h3>

                <div className="flex items-center gap-2 mt-2 text-zinc-500">

                    <Calendar size={16} />

                    {date}

                </div>

            </div>

            {/* Middle */}

            <div className="text-center">

                <p className="text-zinc-500">

                    Score

                </p>

                <h3 className="text-2xl font-bold text-violet-400">

                    {attempt.percentage}%

                </h3>

            </div>

            <div className="text-center">

                <p className="text-zinc-500">

                    Correct

                </p>

                <h3 className="text-2xl font-bold text-green-400">

                    {attempt.score}/{attempt.totalQuestions}

                </h3>

            </div>

            {/* Right */}

            <Button

                onClick={() =>

                    navigate(

                        `/quiz/result/${attempt.id}`

                    )

                }

            >

                View Review

                <ArrowRight size={18} />

            </Button>

        </div>

    );

}