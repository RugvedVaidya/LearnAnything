import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function SidebarItem({

    to,

    icon: Icon,

    label,

}) {

    return (

        <NavLink

            to={to}

            className={({ isActive }) =>

                clsx(

                    "group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300",

                    isActive
                        ? "bg-gradient-to-r from-[#7C5CFC] to-[#5B42F3] text-white shadow-lg"
                        : "text-zinc-400 hover:bg-[#1E1E23] hover:text-white"

                )

            }

        >

            <Icon size={22} />

            <span className="font-medium">

                {label}

            </span>

        </NavLink>

    );

}