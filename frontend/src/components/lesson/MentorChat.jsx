import { useEffect, useRef, useState } from "react";
import {
    Sparkles,
    SendHorizonal,
    User,
    Bot,
    Lightbulb,
    BrainCircuit,
    GraduationCap,
} from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";
import MarkdownRenderer from "./MarkdownRenderer";

export default function MentorChat({

    messages,

    loading,

    ask,

}) {

    const [question, setQuestion] = useState("");

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth",

        });

    }, [messages, loading]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!question.trim()) return;

        const q = question;

        setQuestion("");

        await ask(q);

    };

    const quickPrompts = [

        "Explain this in simple words",

        "Give me interview questions",

        "Show a real-world example",

        "Quiz me on this topic",

    ];

    return (

        <Card className="overflow-hidden">

            {/* HEADER */}

            <div className="border-b border-[#322A54] p-6">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">

                            <Sparkles className="text-white" />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold">

                                AI Mentor

                            </h2>

                            <p className="text-zinc-400">

                                Ask anything about this lesson.

                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-2 text-green-400 text-sm">

                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                        Online

                    </div>

                </div>

            </div>

            {/* QUICK PROMPTS */}

            <div className="p-6 border-b border-[#322A54]">

                <p className="text-sm text-zinc-500 mb-4">

                    Suggested Questions

                </p>

                <div className="flex flex-wrap gap-3">

                    {quickPrompts.map((prompt) => (

                        <button

                            key={prompt}

                            onClick={() => setQuestion(prompt)}

                            className="

                                px-4

                                py-2

                                rounded-full

                                bg-[#22233A]

                                hover:bg-[#2C2D48]

                                transition

                                text-sm

                            "

                        >

                            {prompt}

                        </button>

                    ))}

                </div>

            </div>

            {/* CHAT */}

            <div className="p-6 h-[520px] overflow-y-auto space-y-6">

                {

                    messages.length === 0 && (

                        <div className="text-center py-12">

                            <BrainCircuit

                                size={48}

                                className="mx-auto text-violet-400"

                            />

                            <h3 className="text-2xl font-bold mt-5">

                                Ready to learn?

                            </h3>

                            <p className="text-zinc-500 mt-3">

                                Ask anything related to this lesson.

                            </p>

                        </div>

                    )

                }

                {

                    messages.map((message, index) => (

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

                                        ? "flex gap-4 max-w-[75%] flex-row-reverse"

                                        : "flex gap-4 max-w-[75%]"

                                }

                            >

                                <div

                                    className={

                                        message.role === "user"

                                            ? "w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center"

                                            : "w-10 h-10 rounded-xl bg-[#23243A] flex items-center justify-center"

                                    }

                                >

                                    {

                                        message.role === "user"

                                            ? <User size={18} />

                                            : <Bot size={18} className="text-violet-400" />

                                    }

                                </div>

                                <div

                                    className={

                                        message.role === "user"

                                            ? "rounded-3xl rounded-tr-lg bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4"

                                            : "rounded-3xl rounded-tl-lg bg-[#1A1C2D] border border-[#322A54] px-6 py-4"

                                    }

                                >

                                    {

                                        message.role === "assistant"

                                            ? (

                                                <MarkdownRenderer

                                                    content={message.text}

                                                />

                                            )

                                            : (

                                                <p>

                                                    {message.text}

                                                </p>

                                            )

                                    }

                                </div>

                            </div>

                        </div>

                    ))

                }

                {

                    loading && (

                        <div className="flex gap-4">

                            <div className="w-10 h-10 rounded-xl bg-[#23243A] flex items-center justify-center">

                                <Bot

                                    size={18}

                                    className="text-violet-400"

                                />

                            </div>

                            <div className="rounded-3xl rounded-tl-lg bg-[#1A1C2D] border border-[#322A54] px-6 py-5">

                                <div className="flex gap-2">

                                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" />

                                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:.2s]" />

                                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:.4s]" />

                                </div>

                            </div>

                        </div>

                    )

                }

                <div ref={bottomRef} />

            </div>

            {/* INPUT */}

            <form

                onSubmit={handleSubmit}

                className="border-t border-[#322A54] p-6"

            >

                <div className="flex gap-4">

                    <input

                        value={question}

                        onChange={(e) => setQuestion(e.target.value)}

                        placeholder="Ask anything about this lesson..."

                        className="

                            flex-1

                            rounded-2xl

                            bg-[#171827]

                            border

                            border-[#322A54]

                            px-5

                            py-4

                            outline-none

                            focus:border-violet-500

                            transition

                        "

                    />

                    <Button

                        type="submit"

                        disabled={!question.trim() || loading}

                    >

                        <SendHorizonal size={18} />

                        Send

                    </Button>

                </div>

            </form>

        </Card>

    );

}