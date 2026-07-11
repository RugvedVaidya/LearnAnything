import {
    Sparkles,
    ArrowRight,
    MessageCircle,
    BookOpen,
    Lightbulb,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../ui/Button";

export default function MentorCard() {

    const navigate = useNavigate();

    return (

        <Card className="relative overflow-hidden p-6">

            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative z-10">

                <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600">

                        <Sparkles className="text-white" />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold">

                            AI Mentor

                        </h2>

                        <p className="text-zinc-400">

                            Your personal learning assistant.

                        </p>

                    </div>

                </div>

                <div className="mt-6 space-y-3">

                    <div className="flex items-center gap-3 text-zinc-300">

                        <BookOpen size={18} className="text-violet-400" />

                        Explain difficult concepts

                    </div>

                    <div className="flex items-center gap-3 text-zinc-300">

                        <Lightbulb size={18} className="text-yellow-400" />

                        Generate interview examples

                    </div>

                    <div className="flex items-center gap-3 text-zinc-300">

                        <MessageCircle size={18} className="text-cyan-400" />

                        Ask questions instantly

                    </div>

                </div>

                <Button

                    className="w-full mt-8"

                    onClick={() => navigate("/mentor")}

                >

                    Start Chat

                    <ArrowRight size={18} />

                </Button>

            </div>

        </Card>

    );

}