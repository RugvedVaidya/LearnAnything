import { Calendar, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import Button from "../ui/Button";

export default function QuizHistoryCard({

    attempt,

    onOpen,

}) {

    const date = new Date(

        attempt.submittedAt

    ).toLocaleString();

    const isCourseQuiz =

        attempt.quiz.type === "COURSE";

    return (

        <div className="rounded-[28px] border border-[#2F2A45] bg-[#171827] p-6">

            <div className="flex items-start justify-between">

                <div>

                    <div className="flex items-center gap-3">

                        {

                            isCourseQuiz ? (

                                <GraduationCap
                                    size={22}
                                    className="text-violet-400"
                                />

                            ) : (

                                <BookOpen
                                    size={22}
                                    className="text-cyan-400"
                                />

                            )

                        }

                        <h2 className="text-2xl font-bold text-white">

                            {

                                attempt.quiz.course?.title

                            }

                        </h2>

                    </div>

                    <p className="mt-3 text-zinc-400">

                        {

                            isCourseQuiz

                                ? "Final Course Assessment"

                                : attempt.quiz.chapter?.title

                        }

                    </p>

                </div>

                <div className="text-right">

                    <h2 className="text-5xl font-bold text-violet-400">

                        {attempt.percentage}%

                    </h2>

                    <p className="text-zinc-500 mt-1">

                        {attempt.score}/{attempt.totalQuestions}

                    </p>

                </div>

            </div>

            <div className="mt-8 flex items-center justify-between">

                <div className="flex items-center gap-2 text-zinc-500">

                    <Calendar size={16} />

                    {date}

                </div>

                <Button

                    onClick={() => onOpen(attempt.id)}

                >

                    View Review

                    <ArrowRight size={18} />

                </Button>

            </div>

        </div>

    );

}