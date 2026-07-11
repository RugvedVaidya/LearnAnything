// import AppRoutes from "./routes/AppRoutes";

// export default function App() {
//     return <AppRoutes />;
// }

import Button from "./components/ui/Button";

export default function App() {

    return (

        <div className="min-h-screen bg-[#171717] flex items-center justify-center">

            <div className="space-y-6">

                <Button>

                    Primary Button

                </Button>

                <Button variant="secondary">

                    Secondary

                </Button>

                <Button variant="danger">

                    Logout

                </Button>

                <Button loading>

                    Logging in...

                </Button>

            </div>

        </div>

    );

}