import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onGenerate }) {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (

        <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

            <input
                type="text"
                placeholder="Search courses..."
                className="w-80 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-white outline-none focus:border-blue-500"
            />

            <div className="flex items-center gap-6">

                <button
                    onClick={onGenerate}
                    className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl text-white font-medium"
                >
                    + Generate Course
                </button>

                <div className="flex items-center gap-4">

                    <div className="text-right">

                        <p className="text-white font-semibold">
                            {user?.name}
                        </p>

                        <p className="text-slate-400 text-sm">
                            {user?.email}
                        </p>

                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-xl text-white"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </header>

    );

}