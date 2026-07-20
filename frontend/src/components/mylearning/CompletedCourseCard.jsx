import Card from "../ui/Card";
import Button from "../ui/Button";

export default function CompletedCourseCard({ course }) {
    return (
        <Card
            hover
            className="p-6 flex flex-col justify-between h-full relative overflow-hidden"
        >
            {/* Success Badge */}
            <div className="absolute top-5 right-5">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    Completed
                </span>
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-3xl">
                ✅
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mt-6 line-clamp-2">
                {course.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-400 mt-3 text-sm leading-6 line-clamp-4">
                {course.description}
            </p>

            {/* Stats */}
            <div className="mt-6 space-y-3">

                <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">
                        Lessons Completed
                    </span>

                    <span className="font-semibold text-white">
                        {course.completedLessons} / {course.totalLessons}
                    </span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">
                        Completion
                    </span>

                    <span className="font-semibold text-emerald-400">
                        100%
                    </span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">
                        Updated
                    </span>

                    <span className="text-white">
                        {course.updatedAt
                            ? new Date(course.updatedAt).toLocaleDateString()
                            : "-"}
                    </span>
                </div>

            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-[#332B52]">

                <Button
                    variant="secondary"
                    className="w-full"
                >
                    Review Course
                </Button>

            </div>
        </Card>
    );
}