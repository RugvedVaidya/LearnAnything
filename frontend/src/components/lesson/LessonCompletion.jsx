import { CheckCircle } from "lucide-react";

import Button from "../ui/Button";

export default function LessonCompletion({
    progress,
    onComplete,
    loading,
}) {

    return (

        <div className="mt-10 rounded-[30px] border border-[#322A54] bg-[#171827] p-8">

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-2xl font-bold">

                        Finished this lesson?

                    </h2>

                    <p className="text-zinc-500 mt-2">

                        Mark it as completed and continue learning.

                    </p>

                </div>

                <Button

                    loading={loading}

                    disabled={progress?.completed}

                    onClick={onComplete}

                    className={

                        progress?.completed

                            ? "!bg-emerald-600 hover:!bg-emerald-600 !text-white"

                            : ""

                    }

                >

                    <CheckCircle size={18} />

                    {

                        progress?.completed

                            ? "✓ Lesson Completed"

                            : "Mark Lesson Complete"

                    }

                </Button>

            </div>

        </div>

    );

}