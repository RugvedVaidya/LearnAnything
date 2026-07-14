import { useState } from "react";

import {

    ChevronDown,

    ChevronRight,

} from "lucide-react";

import QuizChapterRow from "./QuizChapterRow";

export default function QuizModuleAccordion({

    module,

    onChapterQuiz,

}) {

    const [open,setOpen]=useState(false);

    return(

        <div className="rounded-2xl border border-[#2F2A45] overflow-hidden">

            <button

                onClick={()=>setOpen(!open)}

                className="w-full p-5 bg-[#1A1B25] flex justify-between items-center"

            >

                <div>

                    <h3 className="font-bold text-xl">

                        Module {module.order}

                    </h3>

                    <p className="text-zinc-400 mt-1">

                        {module.title}

                    </p>

                </div>

                {

                    open

                    ?

                    <ChevronDown/>

                    :

                    <ChevronRight/>

                }

            </button>

            {

                open &&

                <div className="divide-y divide-[#2F2A45]">

                    {

                        module.chapters.map((chapter)=>(

                            <QuizChapterRow

                                key={chapter.id}

                                chapter={chapter}

                                onStart={(id) => {
                                    console.log("module received", id);
                                    onChapterQuiz(id);
                                }}

                            />

                        ))

                    }

                </div>

            }

        </div>

    );

}