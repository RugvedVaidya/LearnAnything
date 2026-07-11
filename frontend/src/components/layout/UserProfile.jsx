import { LogOut } from "lucide-react";
import useAuth from "../../hooks/useAuth";

export default function UserProfile() {

    const { user, logout } = useAuth();

    return (

        <div className="mt-auto">

            <div className="border-t border-zinc-800 pt-5">

                <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center font-bold text-lg">

                        {user?.name?.charAt(0) || "U"}

                    </div>

                    <div className="flex-1">

                        <p className="font-semibold text-white">

                            {user?.name || "User"}

                        </p>

                        <p className="text-sm text-zinc-500">

                            {user?.email}

                        </p>

                    </div>

                </div>

                <button

                    onClick={logout}

                    className="mt-5 flex items-center gap-2 text-red-400 hover:text-red-300 transition"

                >

                    <LogOut size={18} />

                    Logout

                </button>

            </div>

        </div>

    );

}