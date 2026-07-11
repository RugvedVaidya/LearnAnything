import {
    Clock3,
    Sparkles,
    BookOpen,
} from "lucide-react";

import Card from "../ui/Card";

export default function LessonHero({

    lesson,

    lessonData,

}) {

    return (

        <Card className="p-10 bg-gradient-to-br from-[#5B42F3] via-[#4533C8] to-[#1D173A] relative overflow-hidden">

            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10"/>

            <div className="relative z-10">

                <div className="flex items-center gap-2 text-yellow-300">

                    <Sparkles size={18}/>

                    <span>

                        AI Generated Lesson

                    </span>

                </div>

                <h1 className="text-5xl font-bold mt-6">

                    {lessonData.lesson_title || lesson.title}

                </h1>

                <p className="text-white/80 mt-6 max-w-3xl leading-8">

                    {lessonData.summary || lesson.summary}

                </p>

                <div className="flex gap-8 mt-8">

                    <div className="flex items-center gap-2">

                        <Clock3 size={18}/>

                        {lesson.readingTime} mins

                    </div>

                    <div className="flex items-center gap-2">

                        <BookOpen size={18}/>

                        {lessonData.difficulty || lesson.difficulty}

                    </div>

                </div>

            </div>

        </Card>

    );

}