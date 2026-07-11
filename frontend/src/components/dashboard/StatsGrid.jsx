import {
    BookOpen,
    Clock3,
    Flame,
    TrendingUp,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid({

    courses,

}){

    return(

        <div className="grid grid-cols-4 gap-6 mb-10">

            <StatCard

                icon={BookOpen}

                title="Courses"

                value={courses.length}

                color="#6D5EF6"

            />

            <StatCard

                icon={Clock3}

                title="Hours"

                value="42"

                color="#2563EB"

            />

            <StatCard

                icon={Flame}

                title="Streak"

                value="16"

                subtitle="days"

                color="#F97316"

            />

            <StatCard

                icon={TrendingUp}

                title="Progress"

                value="72%"

                color="#22C55E"

            />

        </div>

    );

}