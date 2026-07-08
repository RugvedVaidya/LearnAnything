import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    Clock,
} from "lucide-react";

export default function ModuleAccordion({
    module,
    onGenerate,
}) {

    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {

        try {

            setLoading(true);

            await onGenerate(module.id);

            setOpen(true);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center p-5 hover:bg-slate-800 transition"
            >

                <div className="text-left">

                    <h3 className="text-xl text-white font-semibold">

                        {module.order}. {module.title}

                    </h3>

                    <p className="text-slate-400 mt-1">

                        {module.description}

                    </p>

                </div>

                <div className="flex items-center gap-5">

                    <div className="flex items-center gap-2 text-slate-400">

                        <Clock size={18} />

                        {module.estimatedTime} hrs

                    </div>

                    {open ? (
                        <ChevronDown className="text-white" />
                    ) : (
                        <ChevronRight className="text-white" />
                    )}

                </div>

            </button>

            {open && (

                <div className="border-t border-slate-800 p-5">

                    {module.chapters.length === 0 ? (

                        <div className="space-y-4">

                            <p className="text-slate-400">

                                Chapters have not been generated yet.

                            </p>

                            <button
                                onClick={handleGenerate}
                                disabled={loading}
                                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 px-5 py-2 rounded-lg text-white transition"
                            >

                                {loading
                                    ? "Generating..."
                                    : "Generate Chapters"}

                            </button>

                        </div>

                    ) : (

                        <div className="space-y-3">

                            {module.chapters.map((chapter) => (

                                <div
                                    key={chapter.id}
                                    className="bg-slate-950 border border-slate-800 rounded-lg p-4"
                                >

                                    <h4 className="text-white font-semibold">

                                        {chapter.order}. {chapter.title}

                                    </h4>

                                    <p className="text-slate-400 mt-1">

                                        {chapter.description}

                                    </p>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            )}

        </div>

    );

}