import { useState } from "react";

export default function GenerateCourseModal({
    open,
    onClose,
    onGenerate,
    loading,
}) {

    const [topic, setTopic] = useState("");
    const [currentKnowledge, setCurrentKnowledge] = useState("BEGINNER");
    const [goal, setGoal] = useState("");

    if (!open) return null;

    const submit = (e) => {
        e.preventDefault();

        onGenerate({
            topic,
            currentKnowledge,
            goal,
        });
    };

    return (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-slate-900 rounded-2xl w-full max-w-xl p-8 border border-slate-800">

                <h2 className="text-2xl font-bold text-white">

                    Generate AI Course

                </h2>

                <form
                    onSubmit={submit}
                    className="mt-6 space-y-5"
                >

                    <input
                        className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white"
                        placeholder="Topic"
                        value={topic}
                        onChange={(e) =>
                            setTopic(e.target.value)
                        }
                    />

                    <select
                        className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white"
                        value={currentKnowledge}
                        onChange={(e) =>
                            setCurrentKnowledge(e.target.value)
                        }
                    >

                        <option>BEGINNER</option>
                        <option>INTERMEDIATE</option>
                        <option>ADVANCED</option>

                    </select>

                    <textarea
                        className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white"
                        rows={4}
                        placeholder="Learning Goal"
                        value={goal}
                        onChange={(e) =>
                            setGoal(e.target.value)
                        }
                    />

                    <div className="flex justify-end gap-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 rounded-xl bg-slate-700 text-white"
                        >

                            Cancel

                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 rounded-xl bg-blue-600 text-white"
                        >

                            {loading ? "Generating..." : "Generate"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}