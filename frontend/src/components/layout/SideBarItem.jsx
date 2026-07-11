import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function SidebarItem({

    to,

    icon: Icon,

    label,

}) {

    return (

        <NavLink to={to}>

            {({ isActive }) => (

                <motion.div

                    whileHover={{
                        x: 4,
                    }}

                    transition={{
                        duration: 0.18,
                    }}

                    className={clsx(

                        "relative",

                        "flex items-center gap-4",

                        "px-4 py-3",

                        "rounded-2xl",

                        "cursor-pointer",

                        "transition-all duration-300",

                        isActive

                            ? "bg-gradient-to-r from-[#7C5CFC] to-[#5B42F3] text-white shadow-[0_8px_25px_rgba(124,92,252,0.35)]"

                            : "text-zinc-400 hover:bg-[#18181E] hover:text-white"

                    )}

                >

                    {/* Active Indicator */}

                    {

                        isActive && (

                            <motion.div

                                layoutId="sidebar-indicator"

                                className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-white"

                            />

                        )

                    }

                    <Icon

                        size={20}

                        className={clsx(

                            "ml-2 transition-transform duration-300",

                            isActive && "scale-110"

                        )}

                    />

                    <span className="font-medium tracking-wide">

                        {label}

                    </span>

                </motion.div>

            )}

        </NavLink>

    );

}