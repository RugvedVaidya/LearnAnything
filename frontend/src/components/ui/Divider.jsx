export default function Divider({

    text = "or",

}) {

    return (

        <div className="flex items-center gap-4">

            <div className="flex-1 h-px bg-[#3B335B]" />

            <span className="text-[#8F88A9]">

                {text}

            </span>

            <div className="flex-1 h-px bg-[#3B335B]" />

        </div>

    );

}