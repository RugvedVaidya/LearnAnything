import {
    Flame,
    BookOpen,
    LogOut,
    ChevronRight,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

export default function UserProfile() {

    const { user, logout } = useAuth();

    return (

        <div className="border-t border-[#23232D] pt-6">

            {/* USER */}

            <div className="flex items-center gap-4">

                <div
                    className="
                        h-14
                        w-14
                        rounded-2xl
                        bg-gradient-to-br
                        from-violet-500
                        via-purple-500
                        to-indigo-600
                        flex
                        items-center
                        justify-center
                        text-xl
                        font-bold
                        text-white
                        shadow-lg
                    "
                >

                    {user?.name?.charAt(0)?.toUpperCase() || "U"}

                </div>

                <div className="min-w-0 flex-1">

                    <h3 className="truncate font-semibold text-white">

                        {user?.name || "User"}

                    </h3>

                    <p className="truncate text-sm text-zinc-500">

                        {user?.email || "user@email.com"}

                    </p>

                </div>

            </div>

            {/* BADGE */}

            
            {/* LOGOUT */}

            <button

                onClick={logout}

                className="
                    mt-5
                    w-full
                    rounded-2xl
                    border
                    border-[#2B2B36]
                    bg-[#17171D]
                    px-4
                    py-3
                    transition-all
                    duration-300
                    hover:border-red-500
                    hover:bg-red-500/10
                    flex
                    items-center
                    justify-between
                    text-zinc-300
                    hover:text-red-400
                "

            >

                <div className="flex items-center gap-3">

                    <LogOut size={18} />

                    Logout

                </div>

                <ChevronRight size={18} />

            </button>

        </div>

    );

}