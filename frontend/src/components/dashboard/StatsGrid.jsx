import {
    BookOpen,
    Clock3,
    Flame,
    TrendingUp,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid({ dashboard }) {

    if (!dashboard) {

        return null;

    }

    return (

        <div className="grid grid-cols-4 gap-6 mb-10">

            <StatCard
                icon={BookOpen}
                title="Active Courses"
                value={dashboard.totalCourses}
                subtitle={`${dashboard.totalCourses} enrolled`}
                footer={
                    dashboard.totalCourses === 1
                        ? "1 course in progress"
                        : `${dashboard.totalCourses} courses in progress`
                }
                color="from-violet-500 to-purple-600"
            />

            <StatCard
                icon={Clock3}
                title="Learning Hours"
                value={dashboard.totalHours}
                subtitle="Hours"
                footer={`${dashboard.completedLessons}/${dashboard.totalLessons} lessons completed`}
                color="from-blue-500 to-cyan-500"
            />

            <StatCard
                icon={Flame}
                title="Completed Lessons"
                value={dashboard.completedLessons}
                subtitle={`of ${dashboard.totalLessons}`}
                footer="Keep the momentum going 🔥"
                color="from-orange-500 to-red-500"
            />

            <StatCard
                icon={TrendingUp}
                title="Overall Progress"
                value={`${dashboard.percentage}%`}
                subtitle="Completed"
                footer={
                    dashboard.percentage === 100
                        ? "Course Completed 🎉"
                        : "Keep Learning 🚀"
                }
                color="from-green-500 to-emerald-500"
            />

        </div>

    );

}