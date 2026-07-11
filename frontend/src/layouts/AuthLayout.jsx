import { motion } from "framer-motion";

export default function AuthLayout({ children }) {

    return (

        <div
            className="
                min-h-screen
                overflow-hidden
                flex
                items-center
                justify-center
                relative
                bg-gradient-to-br
                from-[#121212]
                via-[#18141F]
                to-[#0F172A]
            "
        >

            {/* Purple Glow */}

            <div className="absolute -top-56 -right-56 w-[700px] h-[700px] rounded-full bg-[#6F5BFF]/15 blur-[180px]" />

            {/* Orange Glow */}

            <div className="absolute -bottom-60 -left-56 w-[600px] h-[600px] rounded-full bg-[#F5B942]/10 blur-[180px]" />

            {/* Blue Glow */}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#3B82F6]/5 blur-[220px]" />

            <motion.div

                initial={{
                    opacity: 0,
                    y: 30,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                }}

                transition={{
                    duration: .45,
                }}

                className="relative z-10"

            >

                {children}

            </motion.div>

        </div>

    );

}