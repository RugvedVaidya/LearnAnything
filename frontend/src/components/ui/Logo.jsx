export default function Logo() {

    return (

        <div className="flex items-center gap-4 min-w-0">

            {/* Logo */}

            <div className="relative flex-shrink-0">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9C7CFF] via-[#7B61FF] to-[#F5B942]" />

                <div className="absolute inset-0 flex items-center justify-center">

                    <span className="text-white text-xl font-bold">

                        L

                    </span>

                </div>

            </div>

            {/* Text */}

            <div className="min-w-0">

                <h1 className="text-[28px] font-bold text-white leading-none truncate">

                    LearnAnything

                </h1>

                <p className="mt-1 text-sm text-[#9E97B7] truncate">

                    Learn Smarter with AI

                </p>

            </div>

        </div>

    );

}