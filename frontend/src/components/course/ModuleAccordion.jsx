import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    Clock,
} from "lucide-react";

export default function ModuleAccordion({
    module,
    onGenerate,
    onGenerateLessons,
}) {

    const [open, setOpen] = useState(false);

    const [loadingModule, setLoadingModule] = useState(false);

    const [loadingChapter, setLoadingChapter] = useState(null);

    const handleGenerateModule = async () => {

        try {

            setLoadingModule(true);

            await onGenerate(module.id);

            setOpen(true);

        } finally {

            setLoadingModule(false);

        }

    };

    const handleGenerateLessons = async (chapterId) => {

        try {

            setLoadingChapter(chapterId);

            await onGenerateLessons(chapterId);

        } finally {

            setLoadingChapter(null);

        }

    };

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center p-5 hover:bg-slate-800 transition"
            >

                <div className="text-left">

                    <h3 className="text-xl font-semibold text-white">

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

                    {open
                        ? <ChevronDown className="text-white" />
                        : <ChevronRight className="text-white" />
                    }

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
                                onClick={handleGenerateModule}
                                disabled={loadingModule}
                                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 px-5 py-2 rounded-lg text-white"
                            >

                                {loadingModule
                                    ? "Generating..."
                                    : "Generate Chapters"}

                            </button>

                        </div>

                    ) : (

                        <div className="space-y-5">

                            {module.chapters.map((chapter) => (

                                <div
                                    key={chapter.id}
                                    className="bg-slate-950 border border-slate-800 rounded-lg p-5"
                                >

                                    <div className="flex justify-between items-start">

                                        <div>

                                            <h4 className="text-lg font-semibold text-white">

                                                {chapter.order}. {chapter.title}

                                            </h4>

                                            <p className="text-slate-400 mt-2">

                                                {chapter.description}

                                            </p>

                                        </div>

                                        {chapter.lessons.length === 0 && (

                                            <button
                                                onClick={() => handleGenerateLessons(chapter.id)}
                                                disabled={loadingChapter === chapter.id}
                                                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
                                            >

                                                {loadingChapter === chapter.id
                                                    ? "Generating..."
                                                    : "Generate Lessons"}

                                            </button>

                                        )}

                                    </div>

                                    {chapter.lessons.length > 0 && (

                                        <div className="mt-5 space-y-3">

                                            {chapter.lessons.map((lesson) => (

                                                <div
                                                    key={lesson.id}
                                                    className="bg-slate-900 rounded-lg p-4 border border-slate-800"
                                                >

                                                    <div className="flex justify-between">

                                                        <h5 className="text-white font-medium">

                                                            {lesson.order}. {lesson.title}

                                                        </h5>

                                                        <span className="text-sm text-slate-400">

                                                            {lesson.readingTime} min

                                                        </span>

                                                    </div>

                                                    <p className="text-slate-400 mt-2 text-sm">

                                                        {lesson.summary}

                                                    </p>

                                                </div>

                                            ))}

                                        </div>

                                    )}

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            )}

        </div>

    );

} 