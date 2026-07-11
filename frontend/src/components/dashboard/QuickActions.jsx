import {
    Plus,
    BookOpen,
    BrainCircuit,
} from "lucide-react";

import Card from "../ui/Card";

export default function QuickActions({

    onGenerate,

}){

    return(

        <Card className="p-6">

            <h2 className="text-xl font-bold mb-5">

                Quick Actions

            </h2>

            <div className="space-y-4">

                <button
                    onClick={onGenerate}
                    className="w-full flex items-center gap-3 rounded-2xl bg-[#23243A] p-4 hover:bg-[#2D2F47] transition"
                >

                    <Plus/>

                    Generate Course

                </button>

                <button
                    className="w-full flex items-center gap-3 rounded-2xl bg-[#23243A] p-4 hover:bg-[#2D2F47] transition"
                >

                    <BookOpen/>

                    Continue Learning

                </button>

                <button
                    className="w-full flex items-center gap-3 rounded-2xl bg-[#23243A] p-4 hover:bg-[#2D2F47] transition"
                >

                    <BrainCircuit/>

                    AI Quiz

                </button>

            </div>

        </Card>

    );

}import {
    Plus,
    BookOpen,
    BrainCircuit,
    BarChart3,
    ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";

export default function QuickActions({

    onGenerate,

}) {

    const navigate = useNavigate();

    const actions = [

        {
            icon: Plus,
            title: "Generate Course",
            subtitle: "Create a new AI roadmap",
            onClick: onGenerate,
        },

        {
            icon: BookOpen,
            title: "Continue Learning",
            subtitle: "Resume your latest lesson",
            onClick: () => navigate("/courses"),
        },

        {
            icon: BrainCircuit,
            title: "AI Quiz",
            subtitle: "Test your understanding",
            onClick: () => navigate("/quiz"),
        },

        {
            icon: BarChart3,
            title: "Analytics",
            subtitle: "Track your progress",
            onClick: () => navigate("/analytics"),
        },

    ];

    return (

        <Card className="p-6">

            <h2 className="text-2xl font-bold mb-6">

                Quick Actions

            </h2>

            <div className="space-y-4">

                {

                    actions.map((action, index) => {

                        const Icon = action.icon;

                        return (

                            <button

                                key={index}

                                onClick={action.onClick}

                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-[#2D2E38]
                                    bg-[#1A1B24]
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:border-violet-500
                                    hover:bg-[#242638]
                                    hover:translate-x-1
                                "

                            >

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-4">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">

                                            <Icon
                                                size={18}
                                                className="text-white"
                                            />

                                        </div>

                                        <div className="text-left">

                                            <p className="font-semibold">

                                                {action.title}

                                            </p>

                                            <p className="text-sm text-zinc-500">

                                                {action.subtitle}

                                            </p>

                                        </div>

                                    </div>

                                    <ArrowRight
                                        size={18}
                                        className="text-zinc-500"
                                    />

                                </div>

                            </button>

                        );

                    })

                }

            </div>

        </Card>

    );

}