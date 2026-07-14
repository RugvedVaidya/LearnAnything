import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../common/Loader";
import QuizHistoryCard from "./QuizHistoryCard";

import useQuiz from "../../hooks/useQuiz";

export default function QuizHistorySection() {

    const navigate = useNavigate();

    const {

        history,

        loading,

    } = useQuiz();

    const [attempts, setAttempts] = useState([]);

    useEffect(() => {

        loadHistory();

    }, []);

    const loadHistory = async () => {

        try {

            const data = await history();

            setAttempts(data || []);

        }

        catch (error) {

            console.error(error);

        }

    };

    if (loading) {

        return <Loader />;

    }

    return (

        <section className="mt-20">

            <div className="mb-8">

                <h2 className="text-4xl font-bold text-white">

                    Previous Attempts

                </h2>

                <p className="mt-2 text-zinc-400">

                    Review all your previous quizzes and monitor your progress.

                </p>

            </div>

            {

                attempts.length === 0 ? (

                    <div className="rounded-[30px] border border-[#2F2A45] bg-[#171827] p-12 text-center">

                        <h3 className="text-2xl font-semibold">

                            No Quiz Attempts Yet

                        </h3>

                        <p className="mt-3 text-zinc-400">

                            Complete your first AI quiz to see your history here.

                        </p>

                    </div>

                ) : (

                    <div className="space-y-6">

                        {

                            attempts.map((attempt) => (

                                <QuizHistoryCard

                                    key={attempt.id}

                                    attempt={attempt}

                                    onOpen={(attemptId) =>

                                        navigate(

                                            `/quiz/result/${attemptId}`

                                        )

                                    }

                                />

                            ))

                        }

                    </div>

                )

            }

        </section>

    );

}