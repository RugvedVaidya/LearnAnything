import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";

export default function OptionCard({

    option,

    index,

    selected,

    onSelect,

    disabled = false,

}) {

    const labels = ["A", "B", "C", "D"];

    return (

        <button

            type="button"

            disabled={disabled}

            onClick={() => onSelect(index)}

            className={clsx(

                "w-full text-left",

                "rounded-2xl",

                "border",

                "p-5",

                "transition-all",

                "duration-300",

                "flex",

                "items-start",

                "gap-4",

                "disabled:cursor-not-allowed",

                selected

                    ? "border-violet-500 bg-violet-500/10"

                    : "border-[#2F2A45] bg-[#171827] hover:border-violet-400"

            )}

        >

            <div

                className={clsx(

                    "w-10 h-10",

                    "rounded-full",

                    "flex",

                    "items-center",

                    "justify-center",

                    "font-bold",

                    selected

                        ? "bg-violet-600 text-white"

                        : "bg-[#222437] text-zinc-300"

                )}

            >

                {selected

                    ? <CheckCircle2 size={18} />

                    : labels[index]
                }

            </div>

            <div className="flex-1">

                <p className="text-white leading-relaxed">

                    {option}

                </p>

            </div>

        </button>

    );

}