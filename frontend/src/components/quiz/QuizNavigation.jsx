import { ArrowLeft, ArrowRight, Send } from "lucide-react";

import Button from "../ui/Button";

export default function QuizNavigation({

    current,

    total,

    onPrevious,

    onNext,

    onSubmit,

    loading = false,

}) {

    const firstQuestion = current === 0;

    const lastQuestion = current === total - 1;

    return (

        <div className="mt-8 flex items-center justify-between">

            <Button

                variant="secondary"

                disabled={firstQuestion}

                onClick={onPrevious}

            >

                <ArrowLeft size={18} />

                Previous

            </Button>

            {

                lastQuestion ? (

                    <Button

                        loading={loading}

                        onClick={onSubmit}

                    >

                        <Send size={18} />

                        Submit Quiz

                    </Button>

                ) : (

                    <Button

                        onClick={onNext}

                    >

                        Next

                        <ArrowRight size={18} />

                    </Button>

                )

            }

        </div>

    );

}