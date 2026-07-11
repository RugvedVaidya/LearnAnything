import { useState } from "react";
import clsx from "clsx";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Input({

    label,

    error,

    icon,

    type = "text",

    className = "",

    ...props

}) {

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (

        <div className="w-full">

            {label && (

                <label className="block mb-2 text-[#9E97B7] text-sm">

                    {label}

                </label>

            )}

            <div
                className={clsx(

                    "flex items-center",

                    "rounded-3xl",

                    "bg-[#26203F]",

                    "border border-[#3B335B]",

                    "focus-within:border-[#8B7CF7]",

                    "focus-within:ring-2",

                    "focus-within:ring-[#8B7CF7]/20",

                    "transition-all duration-300 hover:border-[#5B4BFF]",

                    className

                )}
            >

                {icon && (

                    <div className="pl-5 text-[#9E97B7]">

                        {icon}

                    </div>

                )}

                <input

                    type={

                        isPassword

                            ? showPassword
                                ? "text"
                                : "password"

                            : type

                    }

                    className="

                        w-full

                        bg-transparent

                        outline-none

                        text-white

                        placeholder:text-[#7B7695]

                        px-5

                        py-5

                    "

                    {...props}

                />

                {isPassword && (

                    <button

                        type="button"

                        onClick={() => setShowPassword(!showPassword)}

                        className="px-5 text-[#9E97B7] hover:text-white"

                    >

                        {

                            showPassword

                                ? <FiEyeOff />

                                : <FiEye />

                        }

                    </button>

                )}

            </div>

            {

                error && (

                    <p className="text-red-400 text-sm mt-2">

                        {error}

                    </p>

                )

            }

        </div>

    );

}