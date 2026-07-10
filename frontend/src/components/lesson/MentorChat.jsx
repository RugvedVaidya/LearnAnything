import { useState } from "react";

import MarkdownRenderer from "./MarkdownRenderer";

export default function MentorChat({

    messages,

    loading,

    ask,

}) {

    const [question, setQuestion] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!question.trim()) {
            return;
        }

        const q = question;

        setQuestion("");

        await ask(q);

    };

    return (

        <div className="mt-16">

            <h2 className="text-3xl font-bold text-white mb-6">

                🤖 AI Mentor

            </h2>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

                <div className="space-y-6 max-h-[500px] overflow-y-auto">

                    {messages.map((message, index) => (

                        <div
                            key={index}
                            className={
                                message.role === "user"
                                    ? "flex justify-end"
                                    : "flex justify-start"
                            }
                        >

                            <div
                                className={
                                    message.role === "user"
                                        ? "bg-blue-600 text-white rounded-xl px-5 py-3 max-w-2xl"
                                        : "bg-slate-800 rounded-xl px-5 py-3 max-w-2xl text-slate-200"
                                }
                            >

                                {message.role === "assistant"
                                    ? (
                                        <MarkdownRenderer
                                            content={message.text}
                                        />
                                    )
                                    : message.text}

                            </div>

                        </div>

                    ))}

                    {loading && (

                        <div className="text-slate-400">

                            AI is thinking...

                        </div>

                    )}

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex gap-3 mt-6"
                >

                    <input
                        value={question}
                        onChange={(e) =>
                            setQuestion(e.target.value)
                        }
                        placeholder="Ask anything about this lesson..."
                        className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none"
                    />

                    <button
                        className="bg-blue-600 hover:bg-blue-700 px-6 rounded-lg text-white"
                    >

                        Send

                    </button>

                </form>

            </div>

        </div>

    );

}