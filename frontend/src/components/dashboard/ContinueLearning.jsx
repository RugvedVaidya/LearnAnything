import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import Button from "../ui/Button";

export default function ContinueLearning({

    progress = 72,

    onGenerate,

}) {

    return (

        <Card className="p-8">

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-3xl font-bold">

                        Continue Learning

                    </h2>

                    <p className="text-zinc-500 mt-2">

                        Keep improving every day.

                    </p>

                </div>

                <Button onClick={onGenerate}>

                    Generate Course

                </Button>

            </div>

            <div className="mt-8">

                <ProgressBar value={progress} />

            </div>

            <div className="flex justify-between mt-3">

                <span className="text-zinc-500">

                    Overall Progress

                </span>

                <span className="font-semibold">

                    {progress}%

                </span>

            </div>

        </Card>

    );

}