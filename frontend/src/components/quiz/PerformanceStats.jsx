import {

    Award,

    BarChart3,

    Target,

    GraduationCap,

} from "lucide-react";

export default function PerformanceStats({

    stats,

}) {

    const cards = [

        {

            title: "Average",

            value: `${stats.averageScore}%`,

            icon: BarChart3,

        },

        {

            title: "Best",

            value: `${stats.bestScore}%`,

            icon: Award,

        },

        {

            title: "Attempts",

            value: stats.attempts,

            icon: Target,

        },

        {

            title: "Final Exams",

            value: stats.courseAttempts,

            icon: GraduationCap,

        },

    ];

    return (

        <div className="grid grid-cols-4 gap-6 mt-8">

            {

                cards.map((card) => (

                    <div

                        key={card.title}

                        className="rounded-[25px] border border-[#2F2A45] bg-[#171827] p-6"

                    >

                        <card.icon

                            size={24}

                            className="text-violet-400"

                        />

                        <p className="mt-5 text-zinc-400">

                            {card.title}

                        </p>

                        <h2 className="mt-2 text-4xl font-bold">

                            {card.value}

                        </h2>

                    </div>

                ))

            }

        </div>

    );

}