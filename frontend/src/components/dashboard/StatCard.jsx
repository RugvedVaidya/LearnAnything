import { ArrowUpRight } from "lucide-react";
import Card from "../ui/Card";

export default function StatCard({

    icon: Icon,

    title,

    value,

    subtitle,

    footer,

    color,

}) {

    return (

        <Card
            hover
            className="relative overflow-hidden p-6"
        >

            {/* Background Glow */}

            <div
                className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-15 blur-3xl`}
            />

            <div className="relative z-10">

                <div className="flex justify-between items-start">

                    <div>

                        <p className="text-sm text-zinc-500 uppercase tracking-wider">

                            {title}

                        </p>

                        <h2 className="mt-4 text-5xl font-bold">

                            {value}

                        </h2>

                        <p className="mt-1 text-zinc-400">

                            {subtitle}

                        </p>

                    </div>

                    <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color}`}
                    >

                        <Icon
                            size={24}
                            className="text-white"
                        />

                    </div>

                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#2A2A33] pt-4">

                    <span className="text-sm text-zinc-400">

                        {footer}

                    </span>

                    <ArrowUpRight
                        size={18}
                        className="text-violet-400"
                    />

                </div>

            </div>

        </Card>

    );

}