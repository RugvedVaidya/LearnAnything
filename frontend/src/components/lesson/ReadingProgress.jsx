import { useEffect, useState } from "react";

export default function ReadingProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const handleScroll = () => {

            const scrollTop = window.scrollY;

            const docHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            if (docHeight <= 0) {
                setProgress(0);
                return;
            }

            setProgress((scrollTop / docHeight) * 100);

        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent">

            <div

                className="h-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-150"

                style={{
                    width: `${progress}%`,
                }}

            />

        </div>

    );

}