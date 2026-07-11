import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../ui/Button";

export default function MentorCard() {

    const navigate = useNavigate();

    return (

        <Card className="p-6">

            <div className="flex items-center gap-3">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">

                    <Sparkles className="text-white"/>

                </div>

                <div>

                    <h2 className="text-xl font-bold">

                        AI Mentor

                    </h2>

                    <p className="text-zinc-400 text-sm">

                        Ask questions about any lesson.

                    </p>

                </div>

            </div>

            <Button

                className="w-full mt-6"

                onClick={() => navigate("/mentor")}

            >

                Open Mentor

                <ArrowRight size={18}/>

            </Button>

        </Card>

    );

}