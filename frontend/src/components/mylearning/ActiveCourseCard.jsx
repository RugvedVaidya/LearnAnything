import Card from "../ui/Card";
import Button from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";

export default function ActiveCourseCard({ course }) {
    const progress = course.progress || 0;

    return (
        <Card
            hover
            className="p-6 flex flex-col justify-between h-full transition-all duration-300"
        >
            <div>

                <div className="flex items-start justify-between">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-2xl">
                        📚
                    </div>

                    <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium">
                        Active
                    </span>

                </div>

                <h3 className="text-xl font-bold text-white mt-6 line-clamp-2">
                    {course.title}
                </h3>

                <p className="text-zinc-400 mt-3 text-sm leading-6 line-clamp-4">
                    {course.description}
                </p>

                <div className="mt-6">
                    <ProgressBar value={progress} />
                </div>

                <div className="flex justify-between items-center mt-3 text-sm">

                    <span className="text-zinc-400">
                        {course.completedLessons} / {course.totalLessons} Lessons
                    </span>

                    <span className="font-semibold text-violet-400">
                        {progress}%
                    </span>

                </div>

            </div>

            <div className="mt-8">

                <div className="rounded-2xl bg-[#151126] border border-[#30284E] p-4 mb-5">

                    <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                        Last Lesson
                    </p>

                    <p className="text-white font-medium line-clamp-2">
                        {course.lastLesson?.title || "Not Started Yet"}
                    </p>

                </div>

                <Button
                    className="w-full"
                >
                    Continue →
                </Button>

            </div>
        </Card>
    );
}