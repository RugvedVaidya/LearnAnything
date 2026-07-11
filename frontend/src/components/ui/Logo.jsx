export default function Logo() {

    return (

        <div className="flex items-center gap-4">

            <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9C7CFF] via-[#7B61FF] to-[#F5B942]" />

                <div className="absolute inset-0 flex items-center justify-center">

                    <span className="text-white text-2xl font-bold">

                        L

                    </span>

                </div>

            </div>

            <div>

                <h1 className="text-4xl font-bold text-white">

                    LearnAnything

                </h1>

                <p className="text-[#9E97B7] text-base">

                    Learn Smarter with AI

                </p>

            </div>

        </div>

    );

}