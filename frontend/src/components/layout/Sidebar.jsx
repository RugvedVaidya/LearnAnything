import {
    LayoutDashboard,
    BookOpen,
    Brain,
    FileQuestion,
    Settings,
} from "lucide-react";

export default function Sidebar() {

    return (

        <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 text-white flex flex-col">

            <div className="p-6">

                <h1 className="text-2xl font-bold text-blue-400">

                    LearnAnything AI

                </h1>

            </div>

            <nav className="flex-1 px-4">

                <SidebarItem
                    icon={<LayoutDashboard size={20} />}
                    title="Dashboard"
                />

                <SidebarItem
                    icon={<BookOpen size={20} />}
                    title="My Courses"
                />

                <SidebarItem
                    icon={<Brain size={20} />}
                    title="AI Mentor"
                />

                <SidebarItem
                    icon={<FileQuestion size={20} />}
                    title="Quiz"
                />

                <SidebarItem
                    icon={<Settings size={20} />}
                    title="Settings"
                />

            </nav>

        </aside>

    );

}

function SidebarItem({ icon, title }) {

    return (

        <button
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition mb-2"
        >
            {icon}

            <span>{title}</span>

        </button>

    );

}