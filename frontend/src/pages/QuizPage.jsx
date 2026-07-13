import AppLayout from "../layouts/AppLayout";

export default function QuizPage() {

    return (

        <AppLayout>

            <div className="max-w-[1600px] mx-auto">

                <div className="mb-10">

                    <h1 className="text-5xl font-bold text-white">

                        AI Quizzes

                    </h1>

                    <p className="text-zinc-400 mt-3 text-lg">

                        Test your understanding chapter by chapter or challenge yourself with a full course assessment.

                    </p>

                </div>

                <div className="rounded-[32px] border border-[#2F2A45] bg-[#151827] p-20 text-center">

                    <h2 className="text-3xl font-bold text-white">

                        Loading Courses...

                    </h2>

                </div>

            </div>

        </AppLayout>

    );

}