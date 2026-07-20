import Card from "../ui/Card";
import Button from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";

export default function ContinueLearningCard({ course }) {
    if (!course) return null;

    const progress = course.progress || 0;

    return (
        <Card
            hover
            className="overflow-hidden bg-gradient-to-br from-[#231A45] via-[#1B1630] to-[#151126] border border-[#4B3C87]"
        >
            <div className="p-8">

                <div className="flex flex-col lg:flex-row justify-between gap-8">

                    {/* Left */}
                    <div className="flex-1">

                        <span className="inline-flex px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-5">
                            Continue Learning
                        </span>

                        <h2 className="text-3xl font-bold text-white leading-tight">
                            {course.title}
                        </h2>

                        <p className="text-zinc-400 mt-4 leading-7">
                            {course.description}
                        </p>

                        <div className="mt-8">
                            <ProgressBar value={progress} />
                        </div>

                        <div className="flex gap-8 mt-4 text-sm text-zinc-400">

                            <span>
                                <span className="text-white font-semibold">
                                    {course.completedLessons}
                                </span>{" "}
                                / {course.totalLessons} Lessons
                            </span>

                            <span>
                                {progress}% Complete
                            </span>

                        </div>

                    </div>

                    {/* Right */}
                    <div className="lg:w-[340px] shrink-0">

                        <Card className="bg-[#120F24] border border-[#322B52] p-6">

                            <p className="text-zinc-500 uppercase text-xs tracking-widest mb-3">
                                Last Lesson
                            </p>

                            <h3 className="text-xl font-semibold text-white">
                                {course.lastLesson?.title || "Not Started"}
                            </h3>

                            <p className="text-zinc-400 mt-3 line-clamp-4 leading-7">
                                {course.lastLesson?.summary ||
                                    "Start this course to begin your learning journey."}
                            </p>

                            <Button
                                className="w-full mt-8"
                            >
                                Resume Learning →
                            </Button>

                        </Card>

                    </div>

                </div>

            </div>
        </Card>
    );
}