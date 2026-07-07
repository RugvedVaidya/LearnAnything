import useAuth from "../../hooks/useAuth";

export default function Navbar() {

    const { user } = useAuth();

    return (

        <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

            <input
                placeholder="Search..."
                className="bg-slate-800 rounded-xl px-4 py-2 w-80 text-white outline-none"
            />

            <div className="flex items-center gap-4">

                <button
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-white"
                >
                    Generate Course
                </button>

                <div className="text-right">

                    <p className="text-white font-semibold">

                        {user?.name}

                    </p>

                    <p className="text-slate-400 text-sm">

                        {user?.email}

                    </p>

                </div>

            </div>

        </header>

    );

}