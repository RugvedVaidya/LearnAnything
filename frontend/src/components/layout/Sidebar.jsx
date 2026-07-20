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
                    to="/my-learning"
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

            </div>

            <div className="mt-auto">

                <UserProfile />

            </div>

        </aside>

    );

}