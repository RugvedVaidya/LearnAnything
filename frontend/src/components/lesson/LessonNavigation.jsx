import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../ui/Button";

export default function LessonNavigation({

    navigation,

}) {

    const navigate = useNavigate();

    if (!navigation) {

        return null;

    }

    const {

        previousLesson,

        nextLesson,

    } = navigation;

    return (

        <Card className="p-8 mt-10">

            <div className="flex items-center gap-3 mb-8">

                <BookOpen
                    className="text-violet-400"
                    size={24}
                />

                <div>

                    <h2 className="text-2xl font-bold">

                        Continue Your Journey

                    </h2>

                    <p className="text-zinc-500 mt-1">

                        Move seamlessly through your learning roadmap.

                    </p>

                </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

                {/* Previous Lesson */}

                <div className="rounded-3xl border border-[#322A54] bg-[#171827] p-6 flex flex-col justify-between">

                    <div>

                        <p className="text-sm text-zinc-500">

                            Previous Lesson

                        </p>

                        {

                            previousLesson ? (

                                <>

                                    <h3 className="mt-3 text-xl font-semibold text-white">

                                        {previousLesson.title}

                                    </h3>

                                    {

                                        previousLesson.module && (

                                            <p className="mt-3 text-sm text-violet-400">

                                                {previousLesson.module.title}

                                            </p>

                                        )

                                    }

                                    {

                                        previousLesson.chapter && (

                                            <p className="text-sm text-zinc-500">

                                                {previousLesson.chapter.title}

                                            </p>

                                        )

                                    }

                                </>

                            ) : (

                                <p className="mt-5 text-zinc-500">

                                    You're at the beginning of this course.

                                </p>

                            )

                        }

                    </div>

                    {

                        previousLesson && (

                            <Button

                                variant="secondary"

                                className="mt-8 w-fit"

                                onClick={() =>

                                    navigate(`/lessons/${previousLesson.id}`)

                                }

                            >

                                <ArrowLeft size={18} />

                                Previous

                            </Button>

                        )

                    }

                </div>

                {/* Next Lesson */}

                <div className="rounded-3xl border border-[#322A54] bg-[#171827] p-6 flex flex-col justify-between">

                    <div>

                        <p className="text-sm text-zinc-500">

                            Next Lesson

                        </p>

                        {

                            nextLesson ? (

                                <>

                                    <h3 className="mt-3 text-xl font-semibold text-white">

                                        {nextLesson.title}

                                    </h3>

                                    {

                                        nextLesson.module && (

                                            <p className="mt-3 text-sm text-violet-400">

                                                {nextLesson.module.title}

                                            </p>

                                        )

                                    }

                                    {

                                        nextLesson.chapter && (

                                            <p className="text-sm text-zinc-500">

                                                {nextLesson.chapter.title}

                                            </p>

                                        )

                                    }

                                </>

                            ) : (

                                <p className="mt-5 text-zinc-500">

                                    🎉 Congratulations! You've completed every lesson in this course.

                                </p>

                            )

                        }

                    </div>

                    {

                        nextLesson && (

                            <Button

                                className="mt-8 w-fit ml-auto"

                                onClick={() =>

                                    navigate(`/lessons/${nextLesson.id}`)

                                }

                            >

                                Next

                                <ArrowRight size={18} />

                            </Button>

                        )

                    }

                </div>

            </div>

        </Card>

    );

}