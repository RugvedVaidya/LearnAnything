import { BookOpen, Clock, Layers } from "lucide-react";

export default function CourseCard({ course }) {

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition cursor-pointer">

            <h2 className="text-2xl font-bold text-white">

                {course.title}

            </h2>

            <p className="text-slate-400 mt-2 line-clamp-2">

                {course.description}

            </p>

            <div className="flex gap-6 mt-6 text-slate-300">

                <div className="flex items-center gap-2">

                    <BookOpen size={18} />

                    {course.difficulty}

                </div>

                <div className="flex items-center gap-2">

                    <Clock size={18} />

                    {course.estimatedHours} hrs

                </div>

                <div className="flex items-center gap-2">

                    <Layers size={18} />

                    {course.modules.length} Modules

                </div>

            </div>

        </div>

    );

}