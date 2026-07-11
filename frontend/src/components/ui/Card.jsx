import clsx from "clsx";
import { motion } from "framer-motion";

export default function Card({

    children,

    className = "",

    hover = false,

    ...props

}) {

    return (

        <motion.div

            whileHover={
                hover
                    ? {
                        y: -4,
                        scale: 1.01,
                    }
                    : {}
            }

            transition={{
                duration: 0.25,
            }}

            className={clsx(

                "rounded-[36px]",
                "bg-[#1B1630]",
                "border border-[#3C335F]",
                "shadow-[0_30px_80px_rgba(0,0,0,0.45)]",

                className

            )}

            {...props}

        >

            {children}

        </motion.div>

    );

}