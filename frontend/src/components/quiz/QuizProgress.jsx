export default function QuizProgress({

    current,

    total,

}) {

    const percentage = Math.round(

        (current / total) * 100

    );

    return (

        <div className="rounded-[30px] border border-[#2F2A45] bg-[#171827] p-6">

            <div className="flex justify-between items-center mb-4">

                <div>

                    <h2 className="text-2xl font-bold text-white">

                        Question {current} of {total}

                    </h2>

                    <p className="text-zinc-400 mt-1">

                        Answer every question carefully.

                    </p>

                </div>

                <div className="text-right">

                    <h3 className="text-3xl font-bold text-violet-400">

                        {percentage}%

                    </h3>

                    <p className="text-zinc-500">

                        Completed

                    </p>

                </div>

            </div>

            <div className="h-3 rounded-full bg-[#23253A] overflow-hidden">

                <div

                    className="

                        h-full

                        rounded-full

                        bg-gradient-to-r

                        from-violet-500

                        to-purple-500

                        transition-all

                        duration-500

                    "

                    style={{

                        width: `${percentage}%`

                    }}

                />

            </div>

        </div>

    );

}