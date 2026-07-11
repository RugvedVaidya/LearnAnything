import {
    Bell,
    Plus,
    Search,
    Sparkles,
} from "lucide-react";

import Button from "../ui/Button";

export default function Navbar() {

    return (

        <header

            className="

                sticky

                top-0

                z-30

                backdrop-blur-xl

                bg-[#09090B]/80

                border-b

                border-zinc-800

                px-10

                py-6

            "

        >

            <div className="flex items-center justify-between">

                {/* LEFT */}

                <div>

                    <h1 className="text-3xl font-bold text-white">

                        Welcome Back 👋

                    </h1>

                    <p className="text-zinc-500 mt-1">

                        Continue your AI learning journey.

                    </p>

                </div>

                {/* RIGHT */}

                <div className="flex items-center gap-4">

                    {/* Search */}

                    <div

                        className="

                            flex

                            items-center

                            gap-3

                            w-[320px]

                            px-4

                            py-3

                            rounded-2xl

                            bg-[#17171C]

                            border

                            border-zinc-800

                        "

                    >

                        <Search
                            size={18}
                            className="text-zinc-500"
                        />

                        <input

                            placeholder="Search courses..."

                            className="

                                flex-1

                                bg-transparent

                                outline-none

                                text-white

                                placeholder:text-zinc-500

                            "

                        />

                    </div>

                    {/* Notification */}

                    <button

                        className="

                            w-12

                            h-12

                            rounded-2xl

                            bg-[#17171C]

                            border

                            border-zinc-800

                            flex

                            items-center

                            justify-center

                            hover:bg-[#222228]

                            transition

                        "

                    >

                        <Bell size={20} />

                    </button>

                    {/* Generate Button */}

                    <Button className="h-12 px-6">

                        <Plus size={18} />

                        Generate Course

                    </Button>

                    {/* AI */}

                    <button

                        className="

                            w-12

                            h-12

                            rounded-2xl

                            bg-gradient-to-r

                            from-violet-500

                            to-purple-600

                            flex

                            items-center

                            justify-center

                        "

                    >

                        <Sparkles size={20} />

                    </button>

                </div>

            </div>

        </header>

    );

}