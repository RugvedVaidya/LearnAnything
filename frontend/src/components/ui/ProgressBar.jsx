export default function ProgressBar({

    value

}){

    return(

        <div className="w-full h-3 rounded-full bg-zinc-800 overflow-hidden">

            <div

                className="h-full rounded-full bg-gradient-to-r from-primary to-violet-400"

                style={{

                    width:`${value}%`

                }}

            />

        </div>

    );

}