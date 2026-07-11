import { ChevronDown, ChevronRight, Clock3, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";

export default function ModuleCard({

    module,

    children,

    onGenerate,

    onGenerateLessons,

}) {

    const [open, setOpen] = useState(false);

    return (

        <Card className="overflow-hidden">

            <div className="p-8">

                <div
                    onClick={() => setOpen(!open)}
                    className="flex justify-between items-center cursor-pointer"
                >

                    <div>

                        <h2 className="text-2xl font-bold">

                            {module.order}. {module.title}

                        </h2>

                        <p className="text-zinc-400 mt-2">

                            {module.description}

                        </p>

                    </div>

                    <div>

                        {

                            open

                                ? <ChevronDown size={28}/>

                                : <ChevronRight size={28}/>

                        }

                    </div>

                </div>

                <div className="flex gap-8 mt-6 text-zinc-400">

                    <div className="flex items-center gap-2">

                        <Clock3 size={18}/>

                        {module.estimatedHours} hrs

                    </div>

                    <div className="flex items-center gap-2">

                        <BookOpen size={18}/>

                        {module.chapters?.length || 0} Chapters

                    </div>

                </div>

                <div className="flex gap-4 mt-8">

                    <Button
                        onClick={(e)=>{

                            e.stopPropagation();

                            onGenerate(module.id);

                        }}
                    >

                        Generate Chapters

                    </Button>

                    <Button
                        variant="secondary"
                        onClick={(e)=>{

                            e.stopPropagation();

                            onGenerateLessons(module.id);

                        }}
                    >

                        Generate Lessons

                    </Button>

                </div>

            </div>

            <AnimatePresence>

                {

                    open && (

                        <motion.div

                            initial={{
                                height:0,
                                opacity:0,
                            }}

                            animate={{
                                height:"auto",
                                opacity:1,
                            }}

                            exit={{
                                height:0,
                                opacity:0,
                            }}

                            className="border-t border-[#322A54]"

                        >

                            <div className="p-8">

                                {children}

                            </div>

                        </motion.div>

                    )

                }

            </AnimatePresence>

        </Card>

    );

}