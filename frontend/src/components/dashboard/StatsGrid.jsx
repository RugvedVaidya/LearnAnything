import {
    BookOpen,
    Clock3,
    Flame,
    TrendingUp,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid({ courses }) {

    return (

        <div className="grid grid-cols-4 gap-6 mb-10">

            <StatCard
                icon={BookOpen}
                title="Active Courses"
                value={courses.length}
                subtitle={`${courses.length} enrolled`}
                footer="+1 this week"
                color="from-violet-500 to-purple-600"
            />

            <StatCard
                icon={Clock3}
                title="Learning Hours"
                value="42"
                subtitle="Hours"
                footer="This month"
                color="from-blue-500 to-cyan-500"
            />

            <StatCard
                icon={Flame}
                title="Learning Streak"
                value="16"
                subtitle="Days"
                footer="Keep it alive 🔥"
                color="from-orange-500 to-red-500"
            />

            <StatCard
                icon={TrendingUp}
                title="Progress"
                value="72%"
                subtitle="Completed"
                footer="Excellent pace"
                color="from-green-500 to-emerald-500"
            />

        </div>

    );

}