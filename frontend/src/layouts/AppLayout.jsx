import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function AppLayout({ children }) {

    return (

        <div className="min-h-screen bg-[#09090B]">

            <Sidebar />

            <div className="ml-[290px] min-h-screen">

                <Navbar />

                <main className="px-12 py-10">

                    {children}

                </main>

            </div>

        </div>

    );

}