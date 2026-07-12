import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../ui/Button";

export default function LessonNavigation({ navigation }) {

    const navigate = useNavigate();

    if (!navigation) return null;

    const {
        previousLesson,
        nextLesson,
        chapter,
    } = navigation;

    return (

        <Card className="p-8 mt-10">

            <div className="flex items-center gap-3 mb-8">

                <BookOpen className="text-violet-400" />

                <h2 className="text-2xl font-bold">

                    Continue Learning

                </h2>

            </div>

            <div className="grid grid-cols-2 gap-6">

                {/* Previous */}

                <div className="rounded-2xl border border-[#322A54] bg-[#171827] p-6">

                    <p className="text-zinc-500 text-sm">

                        Previous Lesson

                    </p>

                    {

                        previousLesson ? (

                            <>

                                <h3 className="mt-3 text-xl font-semibold">

                                    {previousLesson.title}

                                </h3>

                                <p className="mt-2 text-zinc-500">

                                    {chapter.title}

                                </p>

                                <Button

                                    variant="secondary"

                                    className="mt-6"

                                    onClick={() =>

                                        navigate(`/lessons/${previousLesson.id}`)

                                    }

                                >

                                    <ArrowLeft size={18} />

                                    Previous

                                </Button>

                            </>

                        ) : (

                            <p className="mt-6 text-zinc-500">

                                This is the first lesson.

                            </p>

                        )

                    }

                </div>

                {/* Next */}

                <div className="rounded-2xl border border-[#322A54] bg-[#171827] p-6">

                    <p className="text-zinc-500 text-sm">

                        Next Lesson

                    </p>

                    {

                        nextLesson ? (

                            <>

                                <h3 className="mt-3 text-xl font-semibold">

                                    {nextLesson.title}

                                </h3>

                                <p className="mt-2 text-zinc-500">

                                    {chapter.title}

                                </p>

                                <Button

                                    className="mt-6"

                                    onClick={() =>

                                        navigate(`/lessons/${nextLesson.id}`)

                                    }

                                >

                                    Next

                                    <ArrowRight size={18} />

                                </Button>

                            </>

                        ) : (

                            <p className="mt-6 text-zinc-500">

                                You've reached the final lesson.

                            </p>

                        )

                    }

                </div>

            </div>

        </Card>

    );

}