import {
    Bell,
    Plus,
    Search,
    Sparkles,
} from "lucide-react";

import Button from "../ui/Button";

export default function Navbar({

    onGenerate,

}) {

    return (

        <header
            className="
                sticky
                top-0
                z-30
                h-[78px]
                backdrop-blur-xl
                bg-[#09090B]/85
                border-b
                border-[#24242D]
                px-8
                flex
                items-center
                justify-between
            "
        >

            {/* LEFT */}

            <div className="flex items-center gap-4">

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        w-[340px]
                        px-4
                        py-3
                        rounded-2xl
                        bg-[#151518]
                        border
                        border-[#26262F]
                        transition
                        focus-within:border-violet-500
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

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3">

                <button
                    className="
                        w-11
                        h-11
                        rounded-xl
                        border
                        border-[#26262F]
                        bg-[#151518]
                        flex
                        items-center
                        justify-center
                        hover:bg-[#1D1D22]
                        transition
                    "
                >

                    <Bell size={18}/>

                </button>

                <Button

                    className="h-11 px-5"

                    onClick={onGenerate}

                >

                    <Plus size={18}/>

                    Generate

                </Button>

                <button
                    disabled
                    title="Coming Soon"
                    className="
                        w-11
                        h-11
                        rounded-xl
                        bg-gradient-to-r
                        from-violet-500
                        to-purple-600
                        flex
                        items-center
                        justify-center
                        opacity-70
                        cursor-not-allowed
                    "
                >

                    <Sparkles size={18}/>

                </button>

            </div>

        </header>

    );

}