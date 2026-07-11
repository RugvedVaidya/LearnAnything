import clsx from "clsx";

export default function Badge({

    children,

    color="primary"

}){

    const colors={

        primary:"bg-primary/20 text-primary",

        success:"bg-green-500/20 text-green-400",

        warning:"bg-yellow-500/20 text-yellow-400",

        danger:"bg-red-500/20 text-red-400",

    };

    return(

        <span
            className={clsx(

                "px-3",

                "py-1",

                "rounded-full",

                "text-xs",

                "font-medium",

                colors[color]

            )}
        >

            {children}

        </span>

    );

}