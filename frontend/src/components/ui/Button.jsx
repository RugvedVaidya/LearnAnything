import clsx from "clsx";
import { motion } from "framer-motion";
import Spinner from "./Spinner";

export default function Button({

    children,

    type = "button",

    variant = "primary",

    size = "md",

    loading = false,

    disabled = false,

    className = "",

    ...props

}) {

    const variants = {

        primary:
            "bg-gradient-to-r from-[#8B7CF7] to-[#6D5EF6] text-white hover:brightness-110",

        secondary:
            "bg-[#26203F] border border-[#3B335B] text-white hover:bg-[#30294B]",

        danger:
            "bg-red-600 hover:bg-red-700 text-white",

        ghost:
            "bg-transparent text-[#9E97B7] hover:bg-[#26203F]",

    };

    const sizes = {

        sm: "px-4 py-2 text-sm",

        md: "px-6 py-3 text-base",

        lg: "px-8 py-4 text-lg",

    };

    return (

        <motion.button

            whileHover={{
                scale: 1.02,
            }}

            whileTap={{
                scale: 0.98,
            }}

            type={type}

            disabled={disabled || loading}

            className={clsx(

                "rounded-2xl font-semibold transition-all duration-300",

                "flex items-center justify-center gap-3",

                "disabled:opacity-50 disabled:cursor-not-allowed",

                variants[variant],

                sizes[size],

                className

            )}

            {...props}

        >

            {loading && <Spinner size={18} />}

            {children}

        </motion.button>

    );

}