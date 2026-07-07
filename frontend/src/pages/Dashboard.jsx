import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function Dashboard() {

    return (

        <div className="flex h-screen bg-slate-950">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 overflow-auto p-8">

                    <h1 className="text-4xl font-bold text-white">

                        Welcome Back 👋

                    </h1>

                    <p className="text-slate-400 mt-2">

                        Continue your AI learning journey.

                    </p>

                </main>

            </div>

        </div>

    );

}