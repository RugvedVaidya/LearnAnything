import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    Trophy,
    CheckCircle,
    XCircle,
    RotateCcw,
    Home,
} from "lucide-react";

import AppLayout from "../layouts/AppLayout";
import Loader from "../components/common/Loader";
import Button from "../components/ui/Button";

import useQuiz from "../hooks/useQuiz";

export default function QuizResult() {

    const { attemptId } = useParams();

    const navigate = useNavigate();

    const {

        getAttempt,

        loading,

    } = useQuiz();

    const [attempt, setAttempt] = useState(null);

    useEffect(() => {

        loadAttempt();

    }, []);

    const loadAttempt = async () => {

        try {

            const data = await getAttempt(attemptId);

            setAttempt(data);

        }

        catch (error) {

            console.error(error);

        }

    };

    if (loading || !attempt) {

        return <Loader />;

    }

    const {

        score,

        totalQuestions,

        percentage,

        quiz,

        answers,

    } = attempt;

    const correct = score;

    const wrong = totalQuestions - score;

        return (

        <AppLayout>

            <div className="max-w-[1700px] mx-auto">

                {/* Hero */}

                <div className="rounded-[30px] border border-[#2F2A45] bg-[#171827] p-10">

                    <div className="flex items-center justify-between">

                        <div>

                            <div className="flex items-center gap-3">

                                <Trophy
                                    size={32}
                                    className="text-yellow-400"
                                />

                                <h1 className="text-5xl font-bold">

                                    Quiz Completed

                                </h1>

                            </div>

                            <p className="mt-4 text-zinc-400 text-lg">

                                Great job! Here's your performance.

                            </p>

                        </div>

                        <div className="text-right">

                            <h2 className="text-7xl font-bold text-violet-400">

                                {percentage}%

                            </h2>

                            <p className="text-zinc-500 mt-2">

                                Final Score

                            </p>

                        </div>

                    </div>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-3 gap-6 mt-8">

                    <div className="rounded-[25px] border border-[#2F2A45] bg-[#171827] p-6">

                        <div className="flex items-center gap-3">

                            <CheckCircle
                                className="text-green-400"
                            />

                            <span className="text-zinc-400">

                                Correct

                            </span>

                        </div>

                        <h2 className="text-4xl font-bold mt-5 text-green-400">

                            {correct}

                        </h2>

                    </div>

                    <div className="rounded-[25px] border border-[#2F2A45] bg-[#171827] p-6">

                        <div className="flex items-center gap-3">

                            <XCircle
                                className="text-red-400"
                            />

                            <span className="text-zinc-400">

                                Wrong

                            </span>

                        </div>

                        <h2 className="text-4xl font-bold mt-5 text-red-400">

                            {wrong}

                        </h2>

                    </div>

                    <div className="rounded-[25px] border border-[#2F2A45] bg-[#171827] p-6">

                        <span className="text-zinc-400">

                            Total Questions

                        </span>

                        <h2 className="text-4xl font-bold mt-5">

                            {totalQuestions}

                        </h2>

                    </div>

                </div>

                {/* Review */}

                <div className="mt-10 space-y-8">

                    {

                        quiz.questions.map((question, index) => {

                            const answer = answers.find(

                                (a) =>

                                    a.questionId === question.id

                            );

                            const options = [

                                question.optionA,

                                question.optionB,

                                question.optionC,

                                question.optionD,

                            ];

                            return (

                                <div

                                    key={question.id}

                                    className="rounded-[30px] border border-[#2F2A45] bg-[#171827] p-8"

                                >

                                    <div className="flex justify-between">

                                        <h2 className="text-2xl font-bold">

                                            Question {index + 1}

                                        </h2>

                                        {

                                            answer.isCorrect ? (

                                                <span className="text-green-400 font-semibold">

                                                    Correct

                                                </span>

                                            ) : (

                                                <span className="text-red-400 font-semibold">

                                                    Incorrect

                                                </span>

                                            )

                                        }

                                    </div>

                                    <p className="mt-6 text-xl">

                                        {question.question}

                                    </p>

                                    <div className="mt-8 space-y-3">

                                        {

                                            options.map((option, optionIndex) => {

                                                const isCorrect =

                                                    optionIndex === Number(question.correctAnswer);

                                                const isSelected =

                                                    optionIndex === Number(answer.selectedAnswer);

                                                return (

                                                    <div

                                                        key={optionIndex}

                                                        className={`

                                                            rounded-2xl

                                                            border

                                                            p-4

                                                            ${

                                                                isCorrect

                                                                    ? "border-green-500 bg-green-500/10"

                                                                    : isSelected

                                                                    ? "border-red-500 bg-red-500/10"

                                                                    : "border-[#2F2A45]"

                                                            }

                                                        `}

                                                    >

                                                        {option}

                                                    </div>

                                                );

                                            })

                                        }

                                    </div>

                                    <div className="mt-8 rounded-2xl bg-[#1D2033] p-5">

                                        <h3 className="font-semibold text-violet-400">

                                            Explanation

                                        </h3>

                                        <p className="mt-3 text-zinc-300 leading-relaxed">

                                            {question.explanation}

                                        </p>

                                    </div>

                                </div>

                            );

                        })

                    }

                </div>

                {/* Buttons */}

                <div className="mt-10 flex justify-between">

                    <Button

                        variant="secondary"

                        onClick={() => navigate("/")}

                    >

                        <Home size={18}/>

                        Dashboard

                    </Button>

                    <Button

                        onClick={() => navigate("/quiz")}

                    >

                        <RotateCcw size={18}/>

                        Take Another Quiz

                    </Button>

                </div>

            </div>

        </AppLayout>

    );

}