import {
    Home,
    BookOpen,
    Bot,
    BrainCircuit,
    BarChart3,
    Settings,
    Target,
} from "lucide-react";

import Logo from "../ui/Logo";
import SidebarItem from "./SidebarItem";
import UserProfile from "./UserProfile";

export default function Sidebar() {

    return (

        <aside
            className="
                fixed
                left-0
                top-0
                bottom-0
                w-[290px]
                bg-[#101012]
                flex
                flex-col
                px-7
                py-8
                z-40
            "
        >

            <Logo />

            <div className="mt-10 space-y-2">

                <SidebarItem
                    to="/"
                    icon={Home}
                    label="Dashboard"
                />

                <SidebarItem
                    to="/courses"
                    icon={BookOpen}
                    label="My Learning"
                />

                <SidebarItem
                    to="/mentor"
                    icon={Bot}
                    label="AI Mentor"
                />

                <SidebarItem
                    to="/quiz"
                    icon={BrainCircuit}
                    label="Quiz"
                />

                <SidebarItem
                    to="/analytics"
                    icon={BarChart3}
                    label="Analytics"
                />

                <SidebarItem
                    to="/settings"
                    icon={Settings}
                    label="Settings"
                />

            </div>

            <div className="mt-10 rounded-3xl bg-[#18181E] border border-[#2C2C35] p-5">

                <div className="flex items-center gap-3">

                    <Target
                        size={20}
                        className="text-violet-400"
                    />

                    <span className="font-semibold text-white">

                        Today's Goal

                    </span>

                </div>

                <p className="text-sm text-zinc-500 mt-3">

                    Finish 2 lessons

                </p>

                <div className="mt-4 h-2 rounded-full bg-zinc-800 overflow-hidden">

                    <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />

                </div>

                <p className="mt-3 text-sm text-zinc-400">

                    2 / 5 Lessons

                </p>

            </div>

            <div className="mt-auto">

                <UserProfile />

            </div>

        </aside>

    );

}