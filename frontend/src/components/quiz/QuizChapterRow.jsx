import {

    BrainCircuit,

    PlayCircle,

} from "lucide-react";

export default function QuizChapterRow({

    chapter,

    onStart,

}) {

    return(

        <div className="flex justify-between items-center p-5 hover:bg-[#1E2131] transition">

            <div>

                <h4 className="font-semibold">

                    Chapter {chapter.order}

                </h4>

                <p className="text-zinc-400 mt-2">

                    {chapter.title}

                </p>

            </div>

            <button

                onClick={()=>onStart(chapter.id)}

                className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 transition flex items-center gap-2"

            >

                <PlayCircle size={18}/>

                Start Quiz

            </button>

        </div>

    );

}