import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function AppLayout({ children }) {

    return (

        <div className="min-h-screen bg-[#09090B]">

            <Sidebar />

            <div className="ml-[320px]">

                <Navbar />

                <main className="p-10">

                    {children}

                </main>

            </div>

        </div>

    );

}