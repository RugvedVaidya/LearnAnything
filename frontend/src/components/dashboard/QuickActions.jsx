import {
    Plus,
    BookOpen,
    BrainCircuit,
} from "lucide-react";

import Card from "../ui/Card";

export default function QuickActions({

    onGenerate,

}){

    return(

        <Card className="p-6">

            <h2 className="text-xl font-bold mb-5">

                Quick Actions

            </h2>

            <div className="space-y-4">

                <button
                    onClick={onGenerate}
                    className="w-full flex items-center gap-3 rounded-2xl bg-[#23243A] p-4 hover:bg-[#2D2F47] transition"
                >

                    <Plus/>

                    Generate Course

                </button>

                <button
                    className="w-full flex items-center gap-3 rounded-2xl bg-[#23243A] p-4 hover:bg-[#2D2F47] transition"
                >

                    <BookOpen/>

                    Continue Learning

                </button>

                <button
                    className="w-full flex items-center gap-3 rounded-2xl bg-[#23243A] p-4 hover:bg-[#2D2F47] transition"
                >

                    <BrainCircuit/>

                    AI Quiz

                </button>

            </div>

        </Card>

    );

}