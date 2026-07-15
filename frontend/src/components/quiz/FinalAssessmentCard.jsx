import { GraduationCap } from "lucide-react";

import AttemptRow from "./AttemptRow";

export default function FinalAssessmentCard({

    attempts = [],

}) {

    return (

        <section className="mt-10">

            <div className="rounded-[28px] border border-[#2F2A45] bg-[#171827] overflow-hidden">

                <div className="flex items-center gap-4 px-8 py-6 border-b border-[#2F2A45]">

                    <GraduationCap

                        size={24}

                        className="text-violet-400"

                    />

                    <div>

                        <h2 className="text-2xl font-bold text-white">

                            Final Assessments

                        </h2>

                        <p className="text-zinc-400 mt-1">

                            Your course-wide assessment attempts

                        </p>

                    </div>

                </div>

                {

                    attempts.length === 0 ? (

                        <div className="py-12 text-center text-zinc-500">

                            No Final Assessments Attempted Yet

                        </div>

                    )

                    :

                    attempts.map((attempt) => (

                        <AttemptRow

                            key={attempt.id}

                            attempt={attempt}

                        />

                    ))

                }

            </div>

        </section>

    );

}