import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../ui/Card";

export default function LessonNavigation({

    previous,

    next,

    onPrevious,

    onNext,

}) {

    return (

        <div className="grid grid-cols-2 gap-6 mt-12">

            <Card

                hover={!!previous}

                className={`p-6 ${
                    previous
                        ? "cursor-pointer"
                        : "opacity-50"
                }`}

                onClick={previous ? onPrevious : undefined}

            >

                <div className="flex items-center gap-3">

                    <ChevronLeft />

                    <div>

                        <p className="text-sm text-zinc-500">

                            Previous Lesson

                        </p>

                        <h3 className="font-semibold mt-1">

                            {previous?.title || "No Previous Lesson"}

                        </h3>

                    </div>

                </div>

            </Card>

            <Card

                hover={!!next}

                className={`p-6 text-right ${
                    next
                        ? "cursor-pointer"
                        : "opacity-50"
                }`}

                onClick={next ? onNext : undefined}

            >

                <div className="flex items-center justify-end gap-3">

                    <div>

                        <p className="text-sm text-zinc-500">

                            Next Lesson

                        </p>

                        <h3 className="font-semibold mt-1">

                            {next?.title || "No Next Lesson"}

                        </h3>

                    </div>

                    <ChevronRight />

                </div>

            </Card>

        </div>

    );

}