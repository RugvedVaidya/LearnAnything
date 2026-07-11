import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";

export default function LessonSidebar() {

    return (

        <div className="space-y-6 sticky top-28">

            <Card className="p-6">

                <h2 className="text-xl font-bold">

                    Reading Progress

                </h2>

                <div className="mt-6">

                    <ProgressBar value={32} />

                </div>

                <p className="mt-3 text-zinc-400">

                    32% Completed

                </p>

            </Card>

            <Card className="p-6">

                <h2 className="text-xl font-bold">

                    Lesson Details

                </h2>

                <div className="mt-5 space-y-4 text-zinc-400">

                    <p>💡 AI Generated</p>

                    <p>📖 Reading Mode</p>

                    <p>🎯 Beginner Friendly</p>

                    <p>⏱ Interactive Lesson</p>

                </div>

            </Card>

        </div>

    );

}