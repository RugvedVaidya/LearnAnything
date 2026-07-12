import {
    BookOpen,
    Target,
    Lightbulb,
    Code2,
    CircleHelp,
} from "lucide-react";

import Card from "../ui/Card";
import MarkdownRenderer from "./MarkdownRenderer";

export default function LessonSection({

    section,

}) {

    const getIcon = () => {

        const name = section.section.toLowerCase();

        if (name.includes("objective"))
            return <Target size={24} className="text-green-400" />;

        if (name.includes("introduction"))
            return <BookOpen size={24} className="text-violet-400" />;

        if (name.includes("example"))
            return <Lightbulb size={24} className="text-yellow-400" />;

        if (name.includes("code"))
            return <Code2 size={24} className="text-cyan-400" />;

        if (name.includes("question"))
            return <CircleHelp size={24} className="text-orange-400" />;

        return <BookOpen size={24} className="text-violet-400" />;

    };

    return (

        <Card className="p-8">

            <div className="flex items-center gap-4 mb-8">

                <div className="w-12 h-12 rounded-2xl bg-[#23243A] flex items-center justify-center">

                    {getIcon()}

                </div>

                <div>

                    <h2 className="text-3xl font-bold">

                        {section.section}

                    </h2>

                </div>

            </div>

            {

                section.text && (

                    <MarkdownRenderer

                        content={section.text}

                    />

                )

            }

            {

                section.objectives && (

                    <div className="grid gap-4 mt-8">

                        {

                            section.objectives.map((objective, index)=>(

                                <div

                                    key={index}

                                    className="

                                        flex

                                        items-start

                                        gap-4

                                        rounded-2xl

                                        border

                                        border-[#2F3150]

                                        bg-[#1B1C2B]

                                        p-5

                                    "

                                >

                                    <div

                                        className="

                                            w-7

                                            h-7

                                            rounded-full

                                            bg-green-500

                                            flex

                                            items-center

                                            justify-center

                                            text-sm

                                            font-bold

                                            text-white

                                            shrink-0

                                        "

                                    >

                                        ✓

                                    </div>

                                    <p className="leading-7">

                                        {objective}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                )

            }

            {

                section.points && (

                    <div className="grid gap-4 mt-8">

                        {

                            section.points.map((point,index)=>(

                                <div

                                    key={index}

                                    className="

                                        rounded-2xl

                                        border

                                        border-[#2F3150]

                                        bg-[#1B1C2B]

                                        p-5

                                    "

                                >

                                    {point}

                                </div>

                            ))

                        }

                    </div>

                )

            }

            {

                section.code && (

                    <div className="mt-8">

                        <MarkdownRenderer

                            content={`\`\`\`java
${section.code}
\`\`\``}

                        />

                    </div>

                )

            }

            {

                section.questions && (

                    <div className="space-y-5 mt-8">

                        {

                            section.questions.map((question,index)=>(

                                <Card

                                    key={index}

                                    className="p-6"

                                >

                                    <p className="text-yellow-400 font-semibold">

                                        Interview Question {index+1}

                                    </p>

                                    <p className="mt-4 leading-7">

                                        {question}

                                    </p>

                                </Card>

                            ))

                        }

                    </div>

                )

            }

        </Card>

    );

}