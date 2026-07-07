import { ChevronDown, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

export default function ModuleAccordion({ module }) {

    const [open, setOpen] = useState(false);

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center p-5 hover:bg-slate-800 transition"
            >

                <div>

                    <h3 className="text-xl text-white font-semibold">

                        {module.order}. {module.title}

                    </h3>

                    <p className="text-slate-400 mt-1">

                        {module.description}

                    </p>

                </div>

                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-2 text-slate-400">

                        <Clock size={18} />

                        {module.estimatedTime} hrs

                    </div>

                    {open ? (
                        <ChevronDown size={22} className="text-white" />
                    ) : (
                        <ChevronRight size={22} className="text-white" />
                    )}

                </div>

            </button>

            {open && (

                <div className="border-t border-slate-800 p-5">

                    {module.chapters.length === 0 ? (

                        <div className="text-slate-500">

                            Chapters not generated yet.

                        </div>

                    ) : (

                        module.chapters.map((chapter) => (

                            <div
                                key={chapter.id}
                                className="bg-slate-950 rounded-lg p-4 mb-3"
                            >

                                <h4 className="text-white font-semibold">

                                    {chapter.order}. {chapter.title}

                                </h4>

                            </div>

                        ))

                    )}

                </div>

            )}

        </div>

    );

}