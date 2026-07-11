import Card from "../ui/Card";
import Button from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";

export default function CourseSidebar() {

    return (

        <div className="space-y-6 sticky top-28">

            <Card className="p-6">

                <h3 className="text-xl font-bold">

                    🤖 AI Mentor

                </h3>

                <p className="text-zinc-400 mt-3">

                    Ask questions about this course anytime.

                </p>

                <Button className="w-full mt-6">

                    Open Mentor

                </Button>

            </Card>

            <Card className="p-6">

                <h3 className="text-xl font-bold">

                    Course Progress

                </h3>

                <ProgressBar value={72} />

                <p className="text-sm text-zinc-400 mt-3">

                    72% Completed

                </p>

            </Card>

            <Card className="p-6">

                <h3 className="text-xl font-bold">

                    Quick Actions

                </h3>

                <div className="mt-5 space-y-3">

                    <Button className="w-full">

                        Generate Quiz

                    </Button>

                    <Button
                        variant="secondary"
                        className="w-full"
                    >

                        Export Notes

                    </Button>

                </div>

            </Card>

        </div>

    );

}