import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import Loader from "../components/common/Loader";

import QuestionCard from "../components/quiz/QuestionCard";
import QuestionPalette from "../components/quiz/QuestionPalette";
import QuizProgress from "../components/quiz/QuizProgress";
import QuizNavigation from "../components/quiz/QuizNavigation";

import useQuiz from "../hooks/useQuiz";

export default function QuizAttempt() {

    const { quizId } = useParams();

    const navigate = useNavigate();

    const {

        loading,

        getQuiz,

        submit,

    } = useQuiz();

    const [quiz, setQuiz] = useState(null);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState({});

    useEffect(() => {

        loadQuiz();

    }, []);

    const loadQuiz = async () => {

        try {

            const data = await getQuiz(quizId);
            data.questions = data.questions.map((q) => ({

                ...q,

                options: [

                    q.optionA,

                    q.optionB,

                    q.optionC,

                    q.optionD,

                ],

            }));
            setQuiz(data);

        }

        catch (error) {

            console.error(error);

        }

    };

    if (loading || !quiz) {

        return <Loader />;

    }

    const question = quiz.questions[currentQuestion];

    const handleAnswer = (optionIndex) => {

        setAnswers((prev) => ({

            ...prev,

            [question.id]: optionIndex,

        }));

    };

    const handlePrevious = () => {

        if (currentQuestion > 0) {

            setCurrentQuestion((prev) => prev - 1);

        }

    };

    const handleNext = () => {

        if (currentQuestion < quiz.questions.length - 1) {

            setCurrentQuestion((prev) => prev + 1);

        }

    };

    const jumpToQuestion = (index) => {

        setCurrentQuestion(index);

    };

        const handleSubmit = async () => {

        if (

            Object.keys(answers).length !== quiz.questions.length

        ) {

            const proceed = window.confirm(

                "Some questions are unanswered. Submit anyway?"

            );

            if (!proceed) {

                return;

            }

        }

        try {

            const result = await submit(

                quiz.id,

                answers

            );

            console.log("Submit Result:", result);
console.log("Attempt ID:", result.attemptId);

            navigate(

                `/quiz/result/${result.attemptId}`

            );

        }

        catch (error) {

            console.error(error);

            alert("Failed to submit quiz.");

        }

    };

    return (

        <AppLayout>

            <div className="max-w-[1700px] mx-auto">

                <QuizProgress

                    current={currentQuestion + 1}

                    total={quiz.questions.length}

                />

                <div className="grid grid-cols-12 gap-8 mt-8">

                    {/* LEFT */}

                    <div className="col-span-8">

                        <QuestionCard

                            question={question}

                            selectedAnswer={

                                answers[question.id]

                            }

                            onAnswer={handleAnswer}

                        />

                        <QuizNavigation

                            current={currentQuestion}

                            total={quiz.questions.length}

                            onPrevious={handlePrevious}

                            onNext={handleNext}

                            onSubmit={handleSubmit}

                            loading={loading}

                        />

                    </div>

                    {/* RIGHT */}

                    <div className="col-span-4 space-y-6">

                        <QuestionPalette

                            questions={quiz.questions}

                            currentQuestion={currentQuestion}

                            answers={answers}

                            onJump={jumpToQuestion}

                        />

                        <div className="rounded-[30px] border border-[#2F2A45] bg-[#171827] p-6">

                            <h2 className="text-xl font-bold">

                                Quiz Information

                            </h2>

                            <div className="mt-6 space-y-5">

                                <div>

                                    <p className="text-zinc-500">

                                        Course

                                    </p>

                                    <p className="font-semibold">

                                        {

                                            quiz.course?.title

                                        }

                                    </p>

                                </div>

                                {

                                    quiz.chapter && (

                                        <div>

                                            <p className="text-zinc-500">

                                                Chapter

                                            </p>

                                            <p className="font-semibold">

                                                {

                                                    quiz.chapter.title

                                                }

                                            </p>

                                        </div>

                                    )

                                }

                                <div>

                                    <p className="text-zinc-500">

                                        Questions

                                    </p>

                                    <p className="font-semibold">

                                        {

                                            quiz.questions.length

                                        }

                                    </p>

                                </div>

                                <div>

                                    <p className="text-zinc-500">

                                        Answered

                                    </p>

                                    <p className="font-semibold text-green-400">

                                        {

                                            Object.keys(

                                                answers

                                            ).length

                                        }

                                        /

                                        {

                                            quiz.questions.length

                                        }

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}